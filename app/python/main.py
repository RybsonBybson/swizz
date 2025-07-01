from pytubefix import YouTube
from flask import Flask, request, jsonify
from flask_cors import CORS
from paths import __CONFIGS__
from json import dumps, loads
import os
import whisper
import base64
import tempfile


with open(os.path.join(__CONFIGS__, "config.json")) as file:
    config = loads(file.read())

host = config['python']['host']
port = config['python']['port']

app = Flask(__name__)
CORS(app)


@app.route('/download_from_yt', methods=['POST'])
def download_from_yt():
    data = request.get_json()
    url: str = data.get('url')
    output_path: str = data.get('output_path')

    if not url or not output_path:
        return jsonify({"error": "Missing 'url' or 'output_path'"}), 400
    
    file_name = os.path.basename(output_path)
    output_path = os.path.dirname(output_path)
    try:
        yt = YouTube(url)
        stream = yt.streams.get_highest_resolution()
        path = stream.download(output_path, file_name) # type: ignore
        return jsonify({"status": "success", "path": path})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/available_models", methods=['POST'])
def available_models():
    return jsonify({"models": whisper.available_models()})

@app.route("/transcript", methods=["POST"])
def transcript():
    data = request.get_json()
    audio_b64 = data.get('file')  # base64 string
    model_name = data.get('model')

    if not audio_b64 or not model_name:
        return jsonify({"error": "Missing file or model"}), 400

    try:
        # Zdekoduj base64 do bajtów
        audio_data = base64.b64decode(audio_b64.split(",")[-1])  # usuń prefix 'data:audio/...;base64,' jeśli jest

        # Zapisz do tymczasowego pliku
        with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as temp_audio:
            temp_audio.write(audio_data)
            temp_audio_path = temp_audio.name

        # Załaduj model Whispera
        model = whisper.load_model(model_name)

        # Transkrypcja
        result = model.transcribe(temp_audio_path)
        
        # Usuń plik tymczasowy
        os.remove(temp_audio_path)

        return jsonify({"transcript": result["text"]})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ---------------------------
if __name__ == "__main__":
    app.run(host, port, debug=True)
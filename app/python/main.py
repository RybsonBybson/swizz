from pytubefix import YouTube
from flask import Flask, request, jsonify
from flask_cors import CORS
from paths import __CONFIGS__
from json import dumps, loads
import os

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
    yt = YouTube(url)
    stream = yt.streams.get_highest_resolution()
    if stream is None: 
        return jsonify({"error": "Couldn't find stream!"}), 500
    
    path = stream.download(output_path, file_name)
    return jsonify({"status": "success", "path": path})



# ---------------------------
if __name__ == "__main__":
    app.run(host, port, debug=True)
import { fetchpython, toBase64 } from "../../js/tools";
import toast from "react-hot-toast";
import { useEffect } from "react";
import "../css/pages.css";

function Transcryption() {

    useEffect(() => {
        const fetchModels = async () => {
            const t = toast.loading("Loading transcryption models");
            try {
                const response = await fetchpython("/available_models");
                const data = await response.json();
                const select = document.querySelector("#model");
                data.models.forEach(model => {
                    const option = document.createElement("option");
                    option.value = model;
                    option.textContent = model;
                    select.appendChild(option);
                });
                toast.success("Loaded all models", { id: t });
            } catch (error) {
                toast.error("Failed to load models", { id: t });
            }
        };
        fetchModels();
    }, []);

    const handleTranscript = async () => {
        const fileInput = document.querySelector("#file");
        const file = fileInput?.files?.[0];
        if (!file) {
            toast.error("Audio file not provided");
            return;
        }

        const select = document.querySelector("#model");
        const selectedModel = select.value;
        if (!selectedModel) {
            toast.error("Choose a model");
            return;
        }

        try {
            const base64Audio = await toBase64(file);
            const t = toast.loading("Transcripting your audio...");
            const response = await fetchpython("/transcript", {
                file: base64Audio,
                model: selectedModel
            });
            const data = await response.json();

            if (response.ok) {
                const transcript = document.querySelector("#transcription");
                transcript.value = data.transcript;
                toast.success("Transcription completed", { id: t });
            } else {
                toast.error(data.error, { id: t });
            }
        } catch (err) {
            toast.error("Error processing file");
        }
    };

    const copyTranscription = (e) => {
        const text = e.currentTarget.value;
        if (!text) return;

        navigator.clipboard.writeText(text)
            .then(() => toast.success("Text copied"))
            .catch(() => toast.error("Problem occurred while copying text"));
    };

    return (
        <div className="base">
            <div className="row">
                <input type="file" accept="audio/*,video/*" id="file" />
                <select id="model" defaultValue="">
                    <option value="" disabled>Choose model</option>
                </select>
                <button onClick={handleTranscript}>Transcript</button>
            </div>
            <textarea readOnly id="transcription" placeholder="Here will be your transcripted text" onClick={copyTranscription} />
        </div>
    );
}

export default Transcryption;

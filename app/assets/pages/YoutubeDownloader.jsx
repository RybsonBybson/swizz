import { useState } from "react";
import "../css/pages.css";
import { ArrowSquareRightIcon } from "@phosphor-icons/react/dist/ssr";

function YoutubeDownloader() {
    const [link, setLink] = useState("");

    const handleDownload = async () => {
        if (!link) return alert("Enter video url!");
        window.electronAPI.downloadYoutube(link)
    };

    return (
        <div className="base">
            <div className="row">
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Enter YouTube video URL..."
                />
                <button onClick={handleDownload}>Download</button>
            </div>
        </div>
    );
}

export default YoutubeDownloader;

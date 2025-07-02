import "../css/pages.css";
import { fetchpython, pickPath } from "../../js/tools";
import toast from "react-hot-toast";

function YoutubeDownloader() {
    const base = async () => {
        return;
    }

    const handleDownload = async () => {
        const link = document.querySelector("#videoURL")?.value || null;

        if (!link) {
            toast.error("Video URL not provided");
            return;
        }

        const { canceled, filePath } = await pickPath({
            title: "Save video...",
            defaultPath: "video.mp4",
            filters: [
                { name: "MP4", extensions: ["mp4"] }
            ]
        });

        if (canceled || !filePath) return;

        const t = toast.loading("Downloading your video...");
        const response = await fetchpython("/download_from_yt", { "url": link, "output_path": filePath });
        const data = await response.json();

        if (response.ok) {
            toast.success(`Video downloaded at ${data.path}`, { id: t });
        }
        else {
            toast.error(data.error, { id: t });
        }

    };



    return (
        <div className="base">
            <div className="row">
                <input
                    id="videoURL"
                    type="text"
                    placeholder="Enter YouTube video URL..."
                />
                <button onClick={handleDownload}>Download</button>
            </div>
        </div>
    );
}


export default YoutubeDownloader;

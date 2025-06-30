import ytdl from 'ytdl-core';
import { dialog, ipcMain } from 'electron';
import fs from 'fs';
import config from '../configs/config.json' with { type: "json" };


async function fetchpython(url, body) {
    return await fetch(`http://${config.python.host}:${config.python.port}${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}


ipcMain.handle("download-youtube", async (_, url) => {
    const { canceled, filePath } = await dialog.showSaveDialog({
        title: 'Save video as...',
        defaultPath: 'video.mp4',
        filters: [{ name: 'MP4 Video', extensions: ['mp4'] }],
    });

    if(canceled || !filePath) return;

    const response = await fetchpython("/download_from_yt", {"url": url, "output_path": filePath});
    console.log(await response.json());
    
});

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("electronAPI", {
  downloadYoutube: (url) => ipcRenderer.invoke("download-youtube", url),
});

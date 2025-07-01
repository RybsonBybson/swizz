const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("back", {
  pickPath: (data) => ipcRenderer.invoke("pick-path", data),
});

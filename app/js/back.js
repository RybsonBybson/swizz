import { dialog, ipcMain } from 'electron';



ipcMain.handle("pick-path", async (_, data) => {
    const { canceled, filePath } = await dialog.showSaveDialog(data);

    return {canceled, filePath};
});

// electron/main.js
import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path'
import { fileURLToPath } from 'url';
import './back.js';
import { spawn } from 'child_process';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = !app.isPackaged;
let pythonBackend = null;

function startPythonBackend() {
  const pythonPath = 'python';
  const scriptPath = isDev
    ? path.join(__dirname, '../python', 'main.py')
    : path.join(process.resourcesPath, 'python', 'main.py');
  pythonBackend = spawn(pythonPath, [scriptPath], { shell: true });

  return pythonBackend;
}


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    },
    resizable: false
  });


  if(isDev) win.loadURL('http://localhost:5173');                   // for testing purposes!!!
  
  else {                                                            // for build purposes!!!
    win.loadFile(path.join(__dirname, '../dist/index.html')); 
    pythonBackend = startPythonBackend();
    Menu.setApplicationMenu(null);
  }

}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('quit', () => {
  if(pythonBackend) pythonBackend.kill();
})


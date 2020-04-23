/* eslint-disable import/no-extraneous-dependencies */
import { BrowserWindow, app } from 'electron';

/* eslint-disable global-require */
if (require('electron-squirrel-startup')) {
  app.quit();
}

app.on('ready', createWindow);

async function createWindow() {
  const mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    frame: false,
    thickFrame: false,
    resizable: false,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  /* eslint-disable no-undef */
  await mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
}

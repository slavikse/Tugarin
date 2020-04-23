/* eslint-disable import/no-extraneous-dependencies */
import { app, BrowserWindow, globalShortcut } from 'electron';

/* eslint-disable global-require */
if (require('electron-squirrel-startup')) {
  app.quit();
}

app.on('ready', ready);

async function ready() {
  disableBrowserHotKeys();

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

function disableBrowserHotKeys() {
  globalShortcut.register('Ctrl+W', () => {});
  globalShortcut.register('Ctrl+R', () => {});
  globalShortcut.register('Ctrl+M', () => {});
}

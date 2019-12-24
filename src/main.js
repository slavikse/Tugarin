'use strict';

/* eslint-disable-next-line */
const { BrowserWindow, screen, app } = require('electron');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const isServe = true;

let mainWindow;

const createWindow = () => {
  const { workAreaSize } = screen.getPrimaryDisplay();

  mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: workAreaSize.width,
    height: workAreaSize.height,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  /* eslint-disable no-undef */
  // @ts-ignore
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  if (isServe) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = undefined;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    createWindow();
  }
});

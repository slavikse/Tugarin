'use strict';

import { BrowserWindow, screen, app } from 'electron';
import isHotReload from 'electron-squirrel-startup';

if (isHotReload) {
  app.quit();
}

const isDevelopment = process.env.NODE_ENV === 'development';
let mainWindow;

app.on('ready', cunfigureMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    cunfigureMainWindow();
  }
});

function cunfigureMainWindow() {
  const { workAreaSize } = screen.getPrimaryDisplay();

  mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: workAreaSize.width,
    height: workAreaSize.height,
    frame: false,
    thickFrame: false,
    fullscreen: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // @ts-ignore
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = undefined;
  });
}

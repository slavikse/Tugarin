/* eslint-disable import/no-extraneous-dependencies */
import { app, BrowserWindow, globalShortcut } from 'electron';

/* eslint-disable global-require */
if (require('electron-squirrel-startup')) {
  app.quit();
}

app.on('ready', ready);

const isDevelopment = process.env.NODE_ENV === 'development';

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

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  /* eslint-disable no-undef */
  await mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
}

// Быстрые клавиши в Chrome: https://support.google.com/chrome/answer/157179?hl=ru
function disableBrowserHotKeys() {
  globalShortcut.register('Ctrl+Shift+R', () => {});
  globalShortcut.register('Ctrl+Shift+I', () => {});
  globalShortcut.register('Ctrl+M', () => {});
  globalShortcut.register('Ctrl+-', () => {});
  globalShortcut.register('Ctrl+Shift+Plus', () => {});
  globalShortcut.register('Alt+Space', () => {});

  if (!isDevelopment) {
    globalShortcut.register('Ctrl+R', () => {});
    globalShortcut.register('Ctrl+W', () => {});
  }
}

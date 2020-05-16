/* eslint-disable import/no-extraneous-dependencies */
import { app, BrowserWindow, globalShortcut } from 'electron';

/* eslint-disable global-require */
if (require('electron-squirrel-startup')) {
  app.quit();
}

app.on('ready', ready);

// development | production
const environment = 'development';

async function ready() {
  disableBrowserHotKeys();

  const config = {
    x: 0,
    y: 0,
    frame: false,
    thickFrame: false,
    resizable: false,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    },
  };

  if (environment !== 'production') {
    config.frame = true;
  }

  const mainWindow = new BrowserWindow(config);

  if (environment !== 'production') {
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

  if (environment === 'production') {
    globalShortcut.register('Ctrl+R', () => {});
    globalShortcut.register('Ctrl+W', () => {});
  }
}

process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err);
});

process.on('SIGTERM', () => {
  process.exit(0);
});

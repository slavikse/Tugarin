/* eslint-disable import/no-extraneous-dependencies */
import { BrowserWindow, app } from 'electron';

let mainWindow;

app.on('ready', configureMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    configureMainWindow();
  }
});

function configureMainWindow() {
  mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    frame: false,
    thickFrame: false,
    fullscreen: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  /* eslint-disable no-undef */
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  const isDevelopment = process.env.NODE_ENV === 'development';

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  // mainWindow.on('closed', () => {
  //   mainWindow = undefined;
  // });
}

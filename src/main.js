'use strict';

const {
  BrowserWindow,
  screen,
  app,
  Menu,
} = require('electron');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const isDevelopment = process.env.NODE_ENV === 'development';
let mainWindow;

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

function createWindow() {
  cunfigureMainWindow();
  cunfigureMenu();
};

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

function cunfigureMenu() {
  const menu = Menu.buildFromTemplate([
    {
      label: 'Window',
      submenu: [
        { role: 'quit' },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);
}

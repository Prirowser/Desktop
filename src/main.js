const { app, BrowserWindow, Path } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        title: 'Prirowser',
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    })

    win.loadFile(__dirname + '/html/index.html');

    win.webContents.openDevTools();

    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})
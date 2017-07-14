const { BrowserWindow } = require('electron');

const getBrowserWindow = (() => {
  let win = null;

  return () => {
    return new Promise((resolve) => {
      if (win) {
        resolve(win);
      }

      win = new BrowserWindow({ show: false });
      
      win.webContents.on('did-finish-load', () => {
        resolve(win);
      });

      win.on('closed', () => {
        win = null;
      });

      win.loadURL(`file://${__dirname}/index.html`);
    });
  };
})();

const notify = (title, body, icon) => {
  getBrowserWindow().then((win) => {
    win.webContents.send('main-notification', {title, body, icon});
  });
};

module.exports = notify;

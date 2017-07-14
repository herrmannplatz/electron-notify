const {app} = require('electron');
const notify = require('./index')

app.on('ready', () => {
  setTimeout(() => {
    notify('title 1', 'body 1');
  }, 1000);
  setTimeout(() => {
    notify('title 2' , 'body 2', `file://${__dirname}/test.png`);
  }, 3000);
  setTimeout(() => {
    app.quit();
  }, 5000);
});

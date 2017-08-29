# electron-notify
Simple hook to send HTML5 Notifications from the main process

### Installing

```
npm install electron-notify --save
```

### Usage

```javascript
const {app} = require('electron');
const notify = require('electron-notify');

app.on('ready', () => {
  notify('title 1', 'body 1');
});
```

## Running the tests

Test will spawn an sample electron app.

```
npm test
```

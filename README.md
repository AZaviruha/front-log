# front-log
[![NPM version][npm-image]][npm-url]

A lightweight client-side logger, useful for production.

Typical use case: you don't want to show a mass of console-logs for everyone, who will open browser's console in your web-application. But you want to see these logs by demand.
So you can type the code below in console:

```javascript
FrontLog.setLevel(FrontLog.LEVELS.DEBUG);
```

and then just refresh the page. The logging level stores in browser's local storage, so you get all your logs after page refresh.

Or you can add `logLevel={LEVEL}` to the URL of your page.
For example: `/my-supper-app/?logLevel=error`.

Log level from query string has the **highest** priority, if present.


## Logging levels

There are six levels of logs:

```javascript
var log = FrontLog;

log.trace('This is trace log record');
log.debug('This is debug log record');
log.info('This is info log record');
log.warn('This is warn log record');
log.error('This is error log record');
log.fatal('This is fatal log record');
```

`trace` level is the lowest and `fatal` is the highest. Each logging level shows all logs from this level to the highest.


## Usage

```javascript
var FrontLog = require('front-log');
```

or

```html
<script src="dist/front-log.min.js"></script>
```


## Example

See `demo/index.html`.

[npm-image]: http://img.shields.io/badge/npm-v1.0.0-green.svg
[npm-url]: https://www.npmjs.org/package/front-log

# front-log
[![NPM version][npm-image]][npm-url]

Front-end logger is a light-weight client-side logger, useful for production logging.
Typical businnes-case: you don't want to show a mass of console-logs for everyone, who will open browser's console in your web-application. But you want to see these logs by demand.
So you can type the code below in console:
```javascript
    log.setLevel( log.LEVELS.DEBUG );
```
and then just refresh the page. The logging level stores in browser's cookies, so you get all your logs after page refresh.

## Logging levels

There are six logging levels:
```javascript
    log.trace( 'This is trace log record' );
    log.debug( 'This is debug log record' );
    log.info( 'This is info log record' );
    log.warn( 'This is warn log record' );
    log.error( 'This is error log record' );
    log.fatal( 'This is fatal log record' );
```

## Example

See `demo/js/main.js`.


[npm-image]: http://img.shields.io/badge/npm-v0.0.1-green.svg
[npm-url]: https://www.npmjs.org/package/front-log

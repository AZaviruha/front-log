var $   = require( '../../node_modules/jquery' )
  , log = require( '../../src/index' );

$(function () {
    window.log = log;
    log.trace( 'This is trace log record' );
    log.debug( 'This is debug log record' );
    log.info( 'This is info log record' );
    log.warn( 'This is warn log record' );
    log.error( 'This is error log record' );
    log.fatal( 'This is fatal log record' );
});

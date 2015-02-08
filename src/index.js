'use strict';

// IE 8 `bind`
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}


var LOG_LEVELS = {
    TRACE: 50,
    DEBUG: 40,
    INFO:  30,
    WARN:  20,
    ERROR: 10,
    FATAL: 0
};


// http://stackoverflow.com/questions/5639346/shortest-function-for-reading-a-cookie-in-javascript
function getCookie ( name ) {
    return (document.cookie.match('(^|; )'+name+'=([^;]*)')||0)[2];
}


// http://www.quirksmode.org/js/cookies.html
function createCookie( name, value, days ) {
    var date, expires;
	if ( days ) {
		date = new Date();
		date.setTime( date.getTime()+(days*24*60*60*1000) );
		expires = "; expires="+date.toGMTString();
	}
	else expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}


// http://www.quirksmode.org/js/cookies.html
function eraseCookie ( name ) { createCookie( name,"",-1 ); }


function updateCookie ( name, value, days ) {
    eraseCookie( name );
    createCookie( name, value, days ); 
};


function toArray ( arg ) {
    var res = [];
    for ( var i = 0, len = arg.length; i < len; i++ ) {
        res.push( arg[ i ] );
    }
    return res;
}


module.exports = (function () { 
    function log ( level ) {
        var globLogLevel = getCookie( 'LOG_LEVEL' ) || LOG_LEVELS.FATAL
          , msg = toArray( arguments ).slice( 1 );
        if ( level <= globLogLevel ) publicate( level, msg );
    }


    log.trace  = log.bind( null, LOG_LEVELS.TRACE );
    log.debug  = log.bind( null, LOG_LEVELS.DEBUG );
    log.info   = log.bind( null, LOG_LEVELS.INFO );
    log.warn   = log.bind( null, LOG_LEVELS.WARN );
    log.error  = log.bind( null, LOG_LEVELS.ERROR );
    log.fatal  = log.bind( null, LOG_LEVELS.FATAL );
    log.LEVELS = LOG_LEVELS;


    log.setLevel = function ( level, days ) {
        updateCookie( 'LOG_LEVEL', level, days || 1 );
    };


    function publicate ( level, args ) {
        switch ( level ) {
            case LOG_LEVELS.TRACE:
            case LOG_LEVELS.DEBUG:
            case LOG_LEVELS.INFO:  console.log.apply( console, args );
                                   break;
            case LOG_LEVELS.WARN:  console.warn.apply( console, args );
                                   break;
            case LOG_LEVELS.ERROR:
            case LOG_LEVELS.FATAL: console.error.apply( console, args );
                                   break;
        };
    }

    return log;
})();

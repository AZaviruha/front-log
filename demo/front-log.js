(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FrontLog = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLevel = setLevel;
var LEVELS = exports.LEVELS = {
    TRACE: 50,
    DEBUG: 40,
    INFO: 30,
    WARN: 20,
    ERROR: 10,
    FATAL: 0,
    NONE: -1
};

var trace = exports.trace = log.bind(null, LEVELS.TRACE);
var debug = exports.debug = log.bind(null, LEVELS.DEBUG);
var info = exports.info = log.bind(null, LEVELS.INFO);
var warn = exports.warn = log.bind(null, LEVELS.WARN);
var error = exports.error = log.bind(null, LEVELS.ERROR);
var fatal = exports.fatal = log.bind(null, LEVELS.FATAL);

function setLevel(level, days) {
    localStorage.setItem('LOG_LEVEL', level);
};

function log(level) {
    var urlLogLevelID = (/logLevel=([a-zA-Z]+)/.exec(location.search) || [])[1];
    var urlLogLevel = urlLogLevelID && LEVELS[urlLogLevelID.toUpperCase()];
    var storedLogLevel = localStorage.getItem('LOG_LEVEL');
    var globLogLevel = urlLogLevel || storedLogLevel || LEVELS.NONE;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    if (level <= globLogLevel) publicate(level, args);
}

function publicate(level, args) {
    switch (level) {
        case LEVELS.TRACE:
        case LEVELS.DEBUG:
        case LEVELS.INFO:
            console.log.apply(console, args);
            break;
        case LEVELS.WARN:
            console.warn.apply(console, args);
            break;
        case LEVELS.ERROR:
        case LEVELS.FATAL:
            console.error.apply(console, args);
            break;
    };
}

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7UUFtQmdCO0FBakJULElBQU0sMEJBQVM7QUFDbEIsV0FBUSxFQUFSO0FBQ0EsV0FBUSxFQUFSO0FBQ0EsVUFBUSxFQUFSO0FBQ0EsVUFBUSxFQUFSO0FBQ0EsV0FBUSxFQUFSO0FBQ0EsV0FBUSxDQUFSO0FBQ0EsVUFBUSxDQUFDLENBQUQ7Q0FQQzs7QUFVTixJQUFNLHdCQUFRLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxPQUFPLEtBQVAsQ0FBdkI7QUFDTixJQUFNLHdCQUFRLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxPQUFPLEtBQVAsQ0FBdkI7QUFDTixJQUFNLHNCQUFRLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxPQUFPLElBQVAsQ0FBdkI7QUFDTixJQUFNLHNCQUFRLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxPQUFPLElBQVAsQ0FBdkI7QUFDTixJQUFNLHdCQUFRLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxPQUFPLEtBQVAsQ0FBdkI7QUFDTixJQUFNLHdCQUFRLElBQUksSUFBSixDQUFTLElBQVQsRUFBZSxPQUFPLEtBQVAsQ0FBdkI7O0FBRU4sU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLElBQXpCLEVBQStCO0FBQ2xDLGlCQUFhLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0MsS0FBbEMsRUFEa0M7Q0FBL0I7O0FBSVAsU0FBUyxHQUFULENBQWEsS0FBYixFQUE2QjtBQUN6QixRQUFJLGdCQUFpQixDQUFDLHVCQUF1QixJQUF2QixDQUE0QixTQUFTLE1BQVQsQ0FBNUIsSUFBZ0QsRUFBaEQsQ0FBRCxDQUFxRCxDQUFyRCxDQUFqQixDQURxQjtBQUV6QixRQUFJLGNBQWlCLGlCQUFpQixPQUFPLGNBQWMsV0FBZCxFQUFQLENBQWpCLENBRkk7QUFHekIsUUFBSSxpQkFBaUIsYUFBYSxPQUFiLENBQXFCLFdBQXJCLENBQWpCLENBSHFCO0FBSXpCLFFBQUksZUFBaUIsZUFBZSxjQUFmLElBQWlDLE9BQU8sSUFBUCxDQUo3Qjs7c0NBQU47O0tBQU07O0FBTXpCLFFBQUksU0FBUyxZQUFULEVBQXVCLFVBQVUsS0FBVixFQUFpQixJQUFqQixFQUEzQjtDQU5KOztBQVNBLFNBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQixJQUExQixFQUFnQztBQUM1QixZQUFRLEtBQVI7QUFDSSxhQUFLLE9BQU8sS0FBUCxDQURUO0FBRUksYUFBSyxPQUFPLEtBQVAsQ0FGVDtBQUdJLGFBQUssT0FBTyxJQUFQO0FBQWMsb0JBQVEsR0FBUixDQUFZLEtBQVosQ0FBa0IsT0FBbEIsRUFBMkIsSUFBM0IsRUFBbkI7QUFDbUIsa0JBRG5CO0FBSEosYUFLUyxPQUFPLElBQVA7QUFBYyxvQkFBUSxJQUFSLENBQWEsS0FBYixDQUFtQixPQUFuQixFQUE0QixJQUE1QixFQUFuQjtBQUNtQixrQkFEbkI7QUFMSixhQU9TLE9BQU8sS0FBUCxDQVBUO0FBUUksYUFBSyxPQUFPLEtBQVA7QUFBYyxvQkFBUSxLQUFSLENBQWMsS0FBZCxDQUFvQixPQUFwQixFQUE2QixJQUE3QixFQUFuQjtBQUNtQixrQkFEbkI7QUFSSixLQUQ0QjtDQUFoQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjb25zdCBMRVZFTFMgPSB7XG4gICAgVFJBQ0UgOiA1MCxcbiAgICBERUJVRyA6IDQwLFxuICAgIElORk8gIDogMzAsXG4gICAgV0FSTiAgOiAyMCxcbiAgICBFUlJPUiA6IDEwLFxuICAgIEZBVEFMIDogMCxcbiAgICBOT05FICA6IC0xXG59O1xuXG5leHBvcnQgY29uc3QgdHJhY2UgPSBsb2cuYmluZChudWxsLCBMRVZFTFMuVFJBQ0UpO1xuZXhwb3J0IGNvbnN0IGRlYnVnID0gbG9nLmJpbmQobnVsbCwgTEVWRUxTLkRFQlVHKTtcbmV4cG9ydCBjb25zdCBpbmZvICA9IGxvZy5iaW5kKG51bGwsIExFVkVMUy5JTkZPKTtcbmV4cG9ydCBjb25zdCB3YXJuICA9IGxvZy5iaW5kKG51bGwsIExFVkVMUy5XQVJOKTtcbmV4cG9ydCBjb25zdCBlcnJvciA9IGxvZy5iaW5kKG51bGwsIExFVkVMUy5FUlJPUik7XG5leHBvcnQgY29uc3QgZmF0YWwgPSBsb2cuYmluZChudWxsLCBMRVZFTFMuRkFUQUwpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGV2ZWwobGV2ZWwsIGRheXMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTE9HX0xFVkVMJywgbGV2ZWwpO1xufTtcblxuZnVuY3Rpb24gbG9nKGxldmVsLCAuLi5hcmdzKSB7XG4gICAgbGV0IHVybExvZ0xldmVsSUQgID0gKC9sb2dMZXZlbD0oW2EtekEtWl0rKS8uZXhlYyhsb2NhdGlvbi5zZWFyY2gpIHx8IFtdKVsxXTtcbiAgICBsZXQgdXJsTG9nTGV2ZWwgICAgPSB1cmxMb2dMZXZlbElEICYmIExFVkVMU1t1cmxMb2dMZXZlbElELnRvVXBwZXJDYXNlKCldO1xuICAgIGxldCBzdG9yZWRMb2dMZXZlbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMT0dfTEVWRUwnKTtcbiAgICBsZXQgZ2xvYkxvZ0xldmVsICAgPSB1cmxMb2dMZXZlbCB8fCBzdG9yZWRMb2dMZXZlbCB8fCBMRVZFTFMuTk9ORTtcblxuICAgIGlmIChsZXZlbCA8PSBnbG9iTG9nTGV2ZWwpIHB1YmxpY2F0ZShsZXZlbCwgYXJncyk7XG59XG5cbmZ1bmN0aW9uIHB1YmxpY2F0ZShsZXZlbCwgYXJncykge1xuICAgIHN3aXRjaCAobGV2ZWwpIHtcbiAgICAgICAgY2FzZSBMRVZFTFMuVFJBQ0U6XG4gICAgICAgIGNhc2UgTEVWRUxTLkRFQlVHOlxuICAgICAgICBjYXNlIExFVkVMUy5JTkZPOiAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBMRVZFTFMuV0FSTjogIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIExFVkVMUy5FUlJPUjpcbiAgICAgICAgY2FzZSBMRVZFTFMuRkFUQUw6IGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICB9O1xufVxuIl19

'use strict';

export const LEVELS = {
    TRACE : 50,
    DEBUG : 40,
    INFO  : 30,
    WARN  : 20,
    ERROR : 10,
    FATAL : 0,
    NONE  : -1
};

export const trace = log.bind(null, LEVELS.TRACE);
export const debug = log.bind(null, LEVELS.DEBUG);
export const info  = log.bind(null, LEVELS.INFO);
export const warn  = log.bind(null, LEVELS.WARN);
export const error = log.bind(null, LEVELS.ERROR);
export const fatal = log.bind(null, LEVELS.FATAL);

export function setLevel(level, days) {
    localStorage.setItem('LOG_LEVEL', level);
};

function log(level, ...args) {
    let globLogLevel = localStorage.getItem('LOG_LEVEL') || LEVELS.NONE;
    if (level <= globLogLevel) publicate(level, args);
}

function publicate(level, args) {
    switch (level) {
        case LEVELS.TRACE:
        case LEVELS.DEBUG:
        case LEVELS.INFO:  console.log.apply(console, args);
                               break;
        case LEVELS.WARN:  console.warn.apply(console, args);
                               break;
        case LEVELS.ERROR:
        case LEVELS.FATAL: console.error.apply(console, args);
                               break;
    };
}

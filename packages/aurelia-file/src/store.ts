import { createStore } from 'global-store'

import { logLevel } from 'aurelia-logging';

const logLevelLookup = new Map<number, string>()

Object.keys(logLevel).forEach(level => {
  logLevelLookup.set(logLevel[level], level)
})

export const store = createStore('aurelia-logging-store', {
  logLevelLookup
})

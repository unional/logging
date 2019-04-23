import { logLevel } from 'aurelia-logging';
import { createStore } from 'global-store';
import { Appender, Logger } from './interfaces';
import { SimpleConsoleAppender } from './SimpleConsoleAppender';

export interface LoggingStore {
  defaultAppender: Appender
  logs: { [id: string]: Logger },
  appenders: Appender[],
  logLevel: number
}

const defaultValue: LoggingStore = {
  defaultAppender: new SimpleConsoleAppender(),
  logs: {},
  logLevel: logLevel.none,
  appenders: []
}

export const store = createStore('@unional/logging', defaultValue)

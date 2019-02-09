import { logLevel } from 'aurelia-logging';
import upperCase from 'upper-case';

export function stringifyLogLevel(level: number) {
  return upperCase(Object.keys(logLevel).find(n => logLevel[n] === level) || level.toString())
}

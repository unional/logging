import { logLevel } from 'aurelia-logging';
import { createBrush } from './createBrush';
import { isNode } from './environments';
import { Brush, BrushOption, ColorModeOption } from './interfaces';
import { semverGt } from './semverGt';

export interface ColorAppenderOption extends BrushOption, ColorModeOption {
}

// Node@9.3 or below has `console.debug = undefined` or it doesn't log
// Should use `console.log()` in those case.
// istanbul ignore next
// tslint:disable-next-line
const debug = isConsoleDebugAvailable() ? console.debug : console.log
// the `typeof` guards against IE where `console.log.apply()`
// results in error `Object doesn't support property or method 'apply'`
// istanbul ignore next
// tslint:disable-next-line
const info = typeof console.info === 'function' ? console.info : console.log
// istanbul ignore next
// tslint:disable-next-line
const warn = typeof console.warn === 'function' ? console.warn : console.log
// istanbul ignore next
// tslint:disable-next-line
const error = typeof console.error === 'function' ? console.error : console.log

function getLogMethod(level: number) {
  if (level >= logLevel.debug) return debug
  if (level >= logLevel.info) return info
  if (level >= logLevel.warn) return warn
  if (level >= logLevel.error) return error
}

// istanbul ignore next
function isConsoleDebugAvailable() {
  if (!isNode) return true
  // without this, systemjs will complain `process is not defined`
  if (!global.process) return true
  const versionString = process.version.startsWith('v') ? process.version.slice(1) : process.version
  return semverGt(versionString, [9, 3, 0])
}

/**
 * A colored console log.
 * Color only apply to Chrome, Firefox, and NodeJS.
 * Other will behave like `ConsoleAppender`
 */
export class ColorAppender {
  static addCustomLevel(name: string, level: number) {
    (ColorAppender as any).prototype[name] = function (logger: { id: string }, ...rest: any[]) {
      const logMethod = getLogMethod(level)
      if (logMethod)
        logMethod.apply(console, this.brush.color(logger.id, ...rest))
    }
  }
  private brush: Brush
  constructor(option?: ColorAppenderOption) {
    this.brush = createBrush(option)
  }
  error(logger: { id: string }, ...rest: any[]) {
    error.call(console, ...this.brush.color(logger.id, ...rest))
  }
  warn(logger: { id: string }, ...rest: any[]) {
    warn.call(console, ...this.brush.color(logger.id, ...rest))
  }
  info(logger: { id: string }, ...rest: any[]) {
    info.call(console, ...this.brush.color(logger.id, ...rest))
  }
  debug(logger: { id: string }, ...rest: any[]) {
    debug.call(console, ...this.brush.color(logger.id, ...rest))
  }
}

import { addCustomLogLevel, LogLevel } from 'standard-log-core';
import { createMemoryLogWriter } from './MemoryLogWriter';

test('log at all predefined levels', () => {
  const logger = { id: 'log' }
  const writer = createMemoryLogWriter()
  writer.alert(logger, ['alert'])
  writer.critical(logger, ['critical'])
  writer.debug(logger, ['debug'])
  writer.emergency(logger, ['emergency'])
  writer.error(logger, ['error'])
  writer.info(logger, ['info'])
  writer.notice(logger, ['notice'])
  writer.trace(logger, ['trace'])
  writer.warn(logger, ['warn'])
  expect(writer.logs).toEqual([
    { id: 'log', level: 20, messages: ['alert'] },
    { id: 'log', level: 30, messages: ['critical'] },
    { id: 'log', level: 80, messages: ['debug'] },
    { id: 'log', level: 10, messages: ['emergency'] },
    { id: 'log', level: 40, messages: ['error'] },
    { id: 'log', level: 70, messages: ['info'] },
    { id: 'log', level: 60, messages: ['notice'] },
    { id: 'log', level: 90, messages: ['trace'] },
    { id: 'log', level: 50, messages: ['warn'] }
  ])
})

test('can write custom level log', () => {
  addCustomLogLevel('cust_mem', 33)
  const logger = { id: 'log' }
  const writer = createMemoryLogWriter<LogLevel | 'cust_mem'>()
  writer.cust_mem(logger, ['cust_mem'])
  expect(writer.logs).toEqual([{ id: 'log', level: 33, messages: ['cust_mem'] }])
})
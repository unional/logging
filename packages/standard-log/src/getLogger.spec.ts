import a from 'assertron';
import { getLogger } from '.';

test('logger id supports alphanumeric and :_-.', () => {
  getLogger('abcdefghijklmnopqrstuvwxyz:-_.1234567890')
})

test('logger id supports unicode', () => {
  getLogger('ミク香港')
})

test.each('`~!@#$%^&*()=+\\/|[]{}<>,?'.split(''))('throws if id has not supported character %s', (char: string) => {
  a.throws(() => getLogger(char))
})


'use strict';
const router = require('../src/router');

const useDisableSpy = jest.fn();
const useSpy = jest.fn();
const listenSpy = jest.fn();

jest.doMock('express', () => {
  return () => ({
    disable: useDisableSpy,
    use: useSpy,
    listen: listenSpy,
  });
});

describe('test the whole server ', () => {
  test('should express server start', () => {
    require('../src/index');
    expect(useDisableSpy).toHaveBeenCalledWith('aimene');
    expect(useSpy).toHaveBeenCalledWith(router);
    expect(listenSpy).toHaveBeenCalled();
  });
});

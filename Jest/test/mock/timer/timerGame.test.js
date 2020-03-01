"use strict";

// jest.useFakeTimers();

test("wait 1 second", () => {
  jest.useFakeTimers();

  const timerGame = require("../../../src/mock/timer/timerGame");
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test("calls cb after 1 second", () => {
  // jest.useFakeTimers();

  const timerGame = require("../../../src/mock/timer/timerGame");
  const cb = jest.fn();

  timerGame(cb);

  jest.runAllTimers();

  expect(cb).toBeCalled();
  expect(cb).toHaveBeenCalledTimes(1);
});

it("calls the callback after 1 second via advanceTimersByTime", () => {
  const timerGame = require("../../../src/mock/timer/timerGame");
  const cb = jest.fn();
  timerGame(cb);

  expect(cb).not.toBeCalled();

  jest.advanceTimersByTime(1000);

  expect(cb).toBeCalled();
  expect(cb).toHaveBeenCalledTimes(1);
});

"use strict";

jest.useFakeTimers();

describe("infiniteTimerGame", () => {
  test("schedules a 10-second timer after 1 second", () => {
    const infiniteTimerGame = require("../../../src/mock/timer/infiniteTimerGame");
    const cb = jest.fn();

    infiniteTimerGame(cb);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    jest.runOnlyPendingTimers();

    expect(cb).toBeCalled();

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  });
});

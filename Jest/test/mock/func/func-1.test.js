function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe("Function mock", () => {
  test("Using a mock function", () => {
    const cb = jest.fn(x => 42 + x);
    forEach([0, 1], cb);
    expect(cb.mock.calls.length).toBe(2);
    expect(cb.mock.calls[0][0]).toBe(0);
    expect(cb.mock.calls[1][0]).toBe(1);
    expect(cb.mock.results[0].value).toBe(42);
  });

  test("Mock Return Values", () => {
    const cb = jest.fn();
    cb.mockReturnValueOnce(10)
      .mockReturnValueOnce("x")
      .mockReturnValueOnce(true);
    cb();
    cb();
    cb();
    expect(cb.mock.results[0].value).toBe(10);
  });

  test("mockImplementationOnce", () => {
    const cb = jest
      .fn()
      .mockImplementationOnce(cb => cb(null, true))
      .mockImplementationOnce(cb => cb(null, false));

    cb((err, val) => val);
    cb((err, val) => val);
    expect(cb.mock.results[0].value).toBe(true);
    expect(cb.mock.results[1].value).toBe(false);
  });

  test("others", () => {
    const myMockFn = jest
      .fn()
      .mockReturnValue("default")
      .mockImplementation(scalar => 42 + scalar)
      .mockName("add42");

    // The mock function was called at least once
    // expect(mockFunc).toHaveBeenCalled();

    // The mock function was called at least once with the specified args
    // expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

    // The last call to the mock function was called with the specified args
    // expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

    // All calls and the name of the mock is written as a snapshot
    // expect(mockFunc).toMatchSnapshot();

    // The mock function was called at least once
    // expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

    // The mock function was called at least once with the specified args
    // expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

    // The last call to the mock function was called with the specified args
    // expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
    //   arg1,
    //   arg2
    // ]);

    // The first arg of the last call to the mock function was `42`
    // (note that there is no sugar helper for this specific of an assertion)
    // expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

    // A snapshot will check that a mock was invoked the same number of times,
    // in the same order, with the same arguments. It will also assert on the name.
    // expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
    // expect(mockFunc.getMockName()).toBe("a mock name");
  });
});

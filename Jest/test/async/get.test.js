// jest.mock("../../src/async/request");

import get from "../../src/async/get";

describe("async", () => {
  it("works with promises", () => {
    expect.assertions(1);
    return get().then(data => expect(data).toEqual("Hello Koa"));
  });
});

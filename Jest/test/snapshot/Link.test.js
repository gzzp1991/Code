import React from "react";
import renderer from "react-test-renderer";
import Link from "../../src/component/Link";

describe("Link", () => {
  it("renders correctly", () => {
    const linkStr = renderer
      .create(<Link page="http://www.facebook.com">Facebook</Link>)
      .toJSON();
    expect(linkStr).toMatchSnapshot();
  });
});

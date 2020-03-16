import React from "react";
import { BrowserContext } from "./utils/createContext";

export default class Link extends React.PureComponent {
  render() {
    return (
      <BrowserContext.Consumer>
        {context => {
          const { replace, to, ...rest } = this.props;
          const { location, history } = context;

          const props = {
            ...rest,
            onClick: e => {
              e.preventDefault();
              const method = replace ? history.replace : history.push;
              method(to);
            }
          };

          return <a {...props} />;
        }}
      </BrowserContext.Consumer>
    );
  }
}

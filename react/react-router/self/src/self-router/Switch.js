import React from "react";
import { BrowserContext } from "./utils/createContext";
import matchPath from "./utils/matchPath";

export default class Switch extends React.PureComponent {
  render() {
    return (
      <BrowserContext.Consumer>
        {context => {
          let { location, children } = this.props;
          location = location || context.location;

          let match;
          let element;
          React.Children.forEach(children, child => {
            if (!match && React.isValidElement(child)) {
              element = child;

              let { path, from } = child.props;
              path = path || from;

              match = path
                ? matchPath(location.pathname, { ...child.props, path })
                : true;
            }
          });

          return match
            ? React.cloneElement(element, {
                location,
                computedMatch: true
              })
            : null;
        }}
      </BrowserContext.Consumer>
    );
  }
}

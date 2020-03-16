import React from "react";
import { BrowserContext } from "./utils/createContext";
import matchPath from "./utils/matchPath";

export default class Route extends React.PureComponent {
  render() {
    return (
      <BrowserContext.Consumer>
        {context => {
          let {
            location,
            children,
            component: Component,
            computedMatch,
            path
          } = this.props;

          location = location || context.location;

          const match =
            computedMatch ||
            (path ? matchPath(location.pathname, this.props) : true);

          const newContext = { ...context, location, match };

          return (
            <BrowserContext.Provider value={newContext}>
              {match ? children || <Component /> : null}
            </BrowserContext.Provider>
          );
        }}
      </BrowserContext.Consumer>
    );
  }
}

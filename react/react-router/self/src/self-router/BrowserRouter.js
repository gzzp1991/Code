import React from "react";
import createBrowserHistory from "./utils/createBrowserHistory";
import { BrowserContext } from "./utils/createContext";

export default class BrowserRouter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    this.state = { location: this.history.location };

    this._didMount = false;
    this._penddingLocation = null;
    this.unlisten = this.history.listen(location => {
      if (this._didMount) {
        this.setState({ location });
      } else {
        this._penddingLocation = location;
      }
    });
  }

  componentDidMount() {
    this._didMount = true;
    if (this._penddingLocation) {
      this.setState({ location: this._penddingLocation });
    }
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    const { location } = this.state;
    const { children } = this.props;
    const { history } = this;
    return (
      <BrowserContext.Provider
        children={children || null}
        value={{ history, location }}
      />
    );
  }
}

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from "./test";
import NotFound404 from "./404";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/test" component={Test} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

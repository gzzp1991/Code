import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Express from "./test/express";
import Koa from "./test/koa";
import NotFound404 from "./test/404";
import BrowserRouter from "./self-router/BrowserRouter";
import Route from "./self-router/Route";
import Link from "./self-router/Link";
import Switch from "./self-router/Switch";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/test">test</Link>
      <Link to="/404">404</Link>

      <Switch>
        <Route path="/koa" component={Koa} />
        <Route path="/express" component={Express} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

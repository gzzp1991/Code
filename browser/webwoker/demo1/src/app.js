import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from 'Component/nav';

import Test from 'Page/test';
import NotFound404 from 'Page/404';
import Worker from 'Page/worker';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          Please choose route
        </Route>
        <Route path="/test" component={Test} />
        <Route path="/worker" component={Worker} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

import * as React from 'react';
import * as ReactDom from 'react-router-dom';

import Nav from 'Component/nav';
import Test from 'Page/test';
import NotFound404 from 'Page/404';

const { BrowserRouter, Route, Switch } = ReactDom;

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          Please choose route
        </Route>
        <Route path="/test" component={Test} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from 'Component/nav';
import Main from 'Component/main';

import Test from 'Page/test';
import NotFound404 from 'Page/404';

import Grid from 'Page/grid';
import GridBasic from 'Page/grid/basic';
import GridLayoutonly from 'Page/grid/layoutonly';
import GridAutocorrect from 'Page/grid/autocorrect';
import GridDefinechild from 'Page/grid/definechild';
import GridShowcase from 'Page/grid/showcase';
import GridStatic from 'Page/grid/static';
import GridAddremove from 'Page/grid/addremove';
import GridMinmax from 'Page/grid/minmax';
import GridDynamicminmax from 'Page/grid/dynamicminmax';
import GridFreemovement from 'Page/grid/freemovement';
import GridPreventcol from 'Page/grid/preventcol';
import GridErr from 'Page/grid/err';
import GridToolbox from 'Page/grid/toolbox';
import GridDragoutside from 'Page/grid/dragoutside';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main>
        <Switch>
          <Route exact path="/">
            Please choose route
          </Route>
          <Route path="/test" component={Test} />
          <Route
            path="/grid"
            render={({ match: { url } }) => (
              <Grid>
                <Switch>
                  <Route path={url + '/basic'} component={GridBasic} />
                  <Route
                    path={url + '/layoutonly'}
                    component={GridLayoutonly}
                  />
                  <Route
                    path={url + '/autocorrect'}
                    component={GridAutocorrect}
                  />
                  <Route
                    path={url + '/definechild'}
                    component={GridDefinechild}
                  />
                  <Route path={url + '/showcase'} component={GridShowcase} />
                  <Route path={url + '/static'} component={GridStatic} />
                  <Route path={url + '/addremove'} component={GridAddremove} />
                  <Route path={url + '/minmax'} component={GridMinmax} />
                  <Route
                    path={url + '/dynamicminmax'}
                    component={GridDynamicminmax}
                  />
                  <Route
                    path={url + '/freemovement'}
                    component={GridFreemovement}
                  />
                  <Route
                    path={url + '/preventcol'}
                    component={GridPreventcol}
                  />
                  <Route path={url + '/err'} component={GridErr} />
                  <Route path={url + '/toolbox'} component={GridToolbox} />
                  <Route
                    path={url + '/dragoutside'}
                    component={GridDragoutside}
                  />
                </Switch>
              </Grid>
            )}
          />
          <Route component={NotFound404} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

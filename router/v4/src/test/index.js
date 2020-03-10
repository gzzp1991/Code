import React from "react";
import { Route, Switch } from "react-router-dom";
import Child1 from "./child1";
import Child2 from "./child2";

export default function Test(props) {
  const {
    match: { url }
  } = props;
  return (
    <div className="test">
      <Switch>
        <Route exact path={url}>
          请输入子路由
        </Route>

        <Route path={`${url}/1`}>
          <Child1 />
        </Route>
        <Route path={`${url}/2`}>
          <Child2 />
        </Route>

        <Route>请输入正确子路由</Route>
      </Switch>
    </div>
  );
}

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import useState from "./useState/useState";
import useMemo from "./useState/useMemo";
import useCallback from "./useState/useCallback";

import useEffect from "./useEffect/useEffect";
import useLayoutEffect from "./useEffect/useLayoutEffect";

import useRef from "./useRef/useRef";
import useImperativeHandle from "./useRef/useImperativeHandle";

import useReducer from "./useReducer/useReducer";

import useContext from "./useContext/useContext";

import NotFound404 from "./404";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/useState" component={useState} />
        <Route path="/useMemo" component={useMemo} />
        <Route path="/useCallback" component={useCallback} />

        <Route path="/useEffect" component={useEffect} />
        <Route path="/useLayoutEffect" component={useLayoutEffect} />

        <Route path="/useRef" component={useRef} />
        <Route path="/useImperativeHandle" component={useImperativeHandle} />

        <Route path="/useReducer" component={useReducer} />

        <Route path="/useContext" component={useContext} />

        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

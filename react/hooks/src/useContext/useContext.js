import React, {
  useState,
  memo,
  useMemo,
  useCallback,
  useReducer,
  createContext,
  useContext
} from "react";

const initialState = 1;
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { number: state.number + 1 };
    default:
      break;
  }
}

const CounterContext = createContext();

// 第一种获取 CounterContext 方法：不使用 hook
function SubCounter_one() {
  return (
    <CounterContext.Consumer>
      {value => (
        <>
          <p>{value.state.number}</p>
          <button onClick={() => value.dispatch({ type: "ADD" })}>+</button>
        </>
      )}
    </CounterContext.Consumer>
  );
}
// 第二种获取 CounterContext 方法：使用 hook ，更简洁
function SubCounter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
    </>
  );
}
/* class SubCounter extends React.Component{
    static contextTypes = CounterContext
    this.context =  {state, dispatch}
} */

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState, number => ({
    number
  }));
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <SubCounter />
    </CounterContext.Provider>
  );
}

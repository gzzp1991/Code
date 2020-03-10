import store from "./store";

const { dispatch, getState } = store;

dispatch({ type: "ZP", data: 28 });
dispatch({ type: "ZW", data: 28 });
dispatch(dispatch => {
  dispatch({ type: "ZP", data: 30 });
});

export default ({ getState, dispatch }) => next => action => {
  // console.log("console middle start", getState());
  if (typeof action === "function") {
    return action(dispatch);
  }
  return next(action);
  // console.log("console middle end", getState());
};

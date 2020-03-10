export default ({ getState, dispatch }) => next => action => {
  console.log("start", action);
  const beforeState = getState();

  const result = next(action);
  console.log("end", beforeState, getState());

  return result;
};

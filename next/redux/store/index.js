import { createStore, combineReducers, applyMiddleware } from "redux";

import consoleMiddle from "../middlewares/console";
import stopMiddle from "../middlewares/stop";
import reducer from "../reducer";

export default createStore(
  combineReducers(reducer),
  applyMiddleware(consoleMiddle, stopMiddle)
);

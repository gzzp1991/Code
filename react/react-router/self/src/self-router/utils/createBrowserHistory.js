import createTransition from "./createTransition";
import { createLocation } from "./util";

// TODO: 只处理pushState、replaceState，未处理go、back、forward
const createBrowserHistory = () => {
  const globalHistory = window.history;
  const transition = createTransition();

  const push = path => {
    globalHistory.pushState(null, null, path);
    update(path);
  };
  const replace = path => {
    globalHistory.replaceState(null, null, path);
    update(path);
  };

  const go = n => {
    globalHistory.go(n);
  };
  const goBack = () => {
    go(-1);
  };
  const goForward = () => {
    go(1);
  };

  const listen = listener => {
    const unlisten = transition.appendListener(listener);
    return () => {
      // TODO: 补全逻辑
      unlisten();
    };
  };

  // 更新location，监听派发location
  const update = path => {
    const location = createLocation(path, globalHistory.location);
    Object.assign(history.location, location);
    transition.notifyListeners(location);
  };

  const getLocation = () => {
    const { pathname, search } = window.location;
    return createLocation(pathname + search);
  };
  const initLoaction = getLocation();

  const history = {
    location: initLoaction,
    push,
    replace,
    go,
    goBack,
    goForward,
    listen
  };

  return history;
};

export default createBrowserHistory;

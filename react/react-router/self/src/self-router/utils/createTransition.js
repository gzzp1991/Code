const createTransition = () => {
  const listeners = [];

  // 添加监听，返回取消监听方法
  const appendListener = fn => {
    let run = true;
    const listener = (...arg) => {
      if (run) {
        fn(...arg);
      }
    };
    listeners.push(listener);

    return () => {
      run = false;
      listeners.filter(item => item !== listener);
    };
  };

  // 执行监听
  const notifyListeners = (...arg) => {
    listeners.forEach(listener => listener(...arg));
  };

  return { appendListener, notifyListeners };
};

export default createTransition;

function getStep(T) {
  const len = T.length;
  const res = new Array(len).fill(0); // 结果
  const stack = []; // 温度递减栈，记录温度位置

  for (let i = 0; i < len; i++) {
    const now = T[i];

    // 当前温度大于stack栈顶温度，出栈并计算位置差
    while (stack.length && T[stack[stack.length - 1]] < now) {
      const index = stack.pop();
      res[index] = i - index;
    }

    // 进栈
    stack.push(i);
  }

  return res;
}

console.log(getStep([73, 74, 75, 71, 69, 72, 76, 73]));

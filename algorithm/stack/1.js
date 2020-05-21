// 左闭合对应的右闭合
const leftToRight = {
  '(': ')',
  '{': '}',
  '[': ']',
};

const lefts = ['(', '{', '['];

function isValid(str) {
  if (str === '') {
    return true;
  }

  const stack = []; // 记录左闭合对应的右闭合
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const symbol = str[i];

    // 左闭合时
    if (lefts.includes(symbol)) {
      stack.push(leftToRight[symbol]);
      continue;
    }

    // 右闭合时，栈顶和当前应该相等
    if (stack.length === 0 || stack.pop() !== symbol) {
      return false;
    }
  }

  // stack为空则有效
  return stack.length === 0;
}

console.log(isValid('[]'));
console.log(isValid('{}'));
console.log(isValid('[{()}]'));
console.log(isValid('[{()}}'));

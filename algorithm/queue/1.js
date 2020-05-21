class Queue {
  constructor() {
    this.leftStack = [];
    this.rightStack = []; // 将left栈倒序放入right栈
  }

  refreshStack = () => {
    if (!this.rightStack.length) {
      while (this.leftStack.length) {
        this.rightStack.push(this.leftStack.pop());
      }
    }
  };

  push = value => {
    this.leftStack.push(value);
  };

  pop = () => {
    this.refreshStack();

    return this.rightStack.pop();
  };

  peek = () => {
    this.refreshStack();

    return this.rightStack.length
      ? this.rightStack[this.rightStack.length - 1]
      : undefined;
  };

  empty = () => {
    return !this.leftStack.length && !this.rightStack.length;
  };
}

const queue = new Queue();
queue.push('1');
queue.push('2');
queue.push('3');
queue.push('4');

console.log(queue.peek(), queue.pop());
console.log(queue.peek(), queue.pop());
console.log(queue.peek(), queue.pop());
console.log(queue.empty());
console.log(queue.peek(), queue.pop());
console.log(queue.empty());
console.log(queue.peek(), queue.pop());

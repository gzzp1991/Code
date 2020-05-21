class MinStack {
  constructor() {
    this.stack = [];
    this.stack2 = [];
  }

  push = value => {
    this.stack.push(value);
    if (
      this.stack2.length === 0 ||
      this.stack2[this.stack2.length - 1] >= value
    ) {
      this.stack2.push(value);
    }
  };

  pop = () => {
    const pop = this.stack.pop();
    if (this.stack2.length && this.stack2[this.stack2.length - 1] === pop) {
      this.stack2.pop();
    }
    return pop;
  };

  top = () => {
    return this.stack.length ? this.stack[this.stack.length - 1] : undefined;
  };

  getMin = () => {
    return this.stack2.length ? this.stack2[this.stack2.length - 1] : undefined;
  };
}

const minStack = new MinStack();
minStack.push(3);
minStack.push(7);
minStack.push(2);
minStack.push(1);

console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());

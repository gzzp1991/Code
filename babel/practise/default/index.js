const a = d => console.log("abc", d);

const includes = [1, 2, 3].includes(1);

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 100);
});

const aa = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  });
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
}
const cp = new ColorPoint(25, 8);

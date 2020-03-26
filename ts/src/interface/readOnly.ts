interface Point {
  readonly x: number;
  y: number;
}

const p1: Point = { x: 1, y: 2 };
// p1.x = 2; // error
p1.y = 2;

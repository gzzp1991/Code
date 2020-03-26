class Grid {
  static origin = { x: 0, y: 0 };
  constructor(public scale: number) {}
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    const xDist = point.x - Grid.origin.x;
    const yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}

const grid1 = new Grid(1.0); // 1x scale
const grid2 = new Grid(5.0); // 5x scale
console.log(grid1.scale);
console.log(grid2.scale);

class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        const xDist = point.x - Grid.origin.x;
        const yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
const grid1 = new Grid(1.0);
const grid2 = new Grid(5.0);
console.log(grid1.scale);
console.log(grid2.scale);

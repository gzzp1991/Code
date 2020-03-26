function add(x: number, y: number): number {
  return x + y;
}

// const myAdd = function(x: number, y: number): number {
//   return x + y;
// };

const myAdd: (x: number, y: number) => number = function(
  x: number,
  y: number,
): number {
  return x + y;
};

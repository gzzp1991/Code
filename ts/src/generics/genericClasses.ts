class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 1;
myGenericNumber.add = function(x, y) {
  return x + y;
};

const myGenericNumber1 = new GenericNumber<string>();
myGenericNumber1.zeroValue = '1';
myGenericNumber1.add = function(x, y) {
  return x + y;
};

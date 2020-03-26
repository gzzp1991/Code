class GenericNumber {
}
const myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 1;
myGenericNumber.add = function (x, y) {
    return x + y;
};
const myGenericNumber1 = new GenericNumber();
myGenericNumber1.zeroValue = '1';
myGenericNumber1.add = function (x, y) {
    return x + y;
};

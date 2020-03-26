function printLabel(labelObj) {
    console.log(labelObj.label);
}
let myObj = { label: 'aa', size: 10 };
printLabel(myObj);
function createSquare(config) {
    const newSquare = { color: 'white', width: 10 };
    const { color, width } = config;
    if (color) {
        newSquare.color = color;
    }
    if (width) {
        newSquare.width = width;
    }
    return newSquare;
}
const mySquare = createSquare({ color: 'black' });
console.log(mySquare);

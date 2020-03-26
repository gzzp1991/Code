interface labelValue {
  label: string;
}

function printLabel(labelObj: labelValue) {
  console.log(labelObj.label);
}

let myObj = { label: 'aa', size: 10 };

printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; width: number } {
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

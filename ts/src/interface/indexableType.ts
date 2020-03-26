/**
 * Indexable Types
 */
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ['1', '2', '3'];
const myStr: string = myArray[0];

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
// Error: indexing with a numeric string might get you a completely separate type of Animal!
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

// 类型“string”的属性“name”不能赋给字符串索引类型“number”。
// interface NumberDictionary {
//   [index: string]: number;
//   length: number;
//   name: string;
// }

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myStrArray: ReadonlyStringArray = ['1', '2'];
// myStrArray[2] = '3';

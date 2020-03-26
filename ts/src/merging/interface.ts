interface Box {
  width: number;
  height: number;
}
interface Box {
  scale: number;
}
const box: Box = { height: 5, width: 6, scale: 10 };

// interface Cloner {
//   clone(animal: Animal): Animal;
// }
// interface Cloner {
//   clone(animal: Sheep): Sheep;
// }
// interface Cloner {
//   clone(animal: Dog): Dog;
//   clone(animal: Cat): Cat;
// }
// 等于
// interface Cloner {
//   clone(animal: Dog): Dog;
//   clone(animal: Cat): Cat;
//   clone(animal: Sheep): Sheep;
//   clone(animal: Animal): Animal;
// }

// interface Docum {
//   createElement(tagName: any): Element;
// }
// interface Docum {
//   createElement(tagName: 'div'): HTMLDivElement;
//   createElement(tagName: 'span'): HTMLSpanElement;
// }
// interface Docum {
//   createElement(tagName: string): HTMLElement;
//   createElement(tagName: 'canvas'): HTMLCanvasElement;
// }
// 等于
// interface Docum {
//   createElement(tagName: "canvas"): HTMLCanvasElement;
//   createElement(tagName: "div"): HTMLDivElement;
//   createElement(tagName: "span"): HTMLSpanElement;
//   createElement(tagName: string): HTMLElement;
//   createElement(tagName: any): Element;
// }

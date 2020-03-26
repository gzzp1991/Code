/**
 * Private
 */
class Animalll {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animalll {
  constructor() {
    super('Rhino');
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animalll('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');

animal = rhino;
// animal = employee; // 不能将类型“Employee”分配给类型“Animalll”。类型具有私有属性“name”的单独声明

class Animalll {
    constructor(theName) {
        this.name = theName;
    }
}
class Rhino extends Animalll {
    constructor() {
        super('Rhino');
    }
}
class Employee {
    constructor(theName) {
        this.name = theName;
    }
}
let animal = new Animalll('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');
animal = rhino;

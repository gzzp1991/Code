class Person {
    constructor(thisName) {
        this.name = thisName;
    }
}
class Emplyee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
const howard = new Emplyee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
class Personn {
    constructor(thisName) {
        this.name = thisName;
    }
}
class Emplee extends Personn {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
const howar = new Emplee('Howard', 'Sales');

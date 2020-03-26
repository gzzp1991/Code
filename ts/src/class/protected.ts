/**
 * Protected
 */
// The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes.
// 可理解为当前类和子类的private
class Person {
  protected name: string;
  constructor(thisName: string) {
    this.name = thisName;
  }
}
class Emplyee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
const howard = new Emplyee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 属性“name”受保护，只能在类“Person”及其子类中访问。

// A constructor may also be marked protected. This means that the class cannot be instantiated outside of its containing class, but can be extended
// protected constructor时，当前类无法新建实例，子类可以
class Personn {
  protected name: string;
  protected constructor(thisName: string) {
    this.name = thisName;
  }
}
class Emplee extends Personn {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
// const john = new Personn('John'); // 类“Personn”的构造函数是受保护的，仅可在类声明中访问
const howar = new Emplee('Howard', 'Sales');

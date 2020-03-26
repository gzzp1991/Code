/**
 * Advanced Techniques
 */
// Constructor functions
class Greeter {
  static standardGreeting = 'Hello, there';
  greeting: string;
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet()); // "Hello, there"

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = 'Hey there!';

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"

// Using a class as an interface
class Pointt {
  x: number;
  y: number;
}
interface Point3D extends Pointt {
  z: number;
}
let point3d: Point3D = { x: 1, y: 2, z: 3 };

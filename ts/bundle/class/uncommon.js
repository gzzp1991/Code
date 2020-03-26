class Greeter {
    greet() {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}
Greeter.standardGreeting = 'Hello, there';
let greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
let greeterMaker = Greeter;
greeterMaker.standardGreeting = 'Hey there!';
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
class Pointt {
}
let point3d = { x: 1, y: 2, z: 3 };

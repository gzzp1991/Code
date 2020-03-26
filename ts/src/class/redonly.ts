/**
 * Readonly modifier
 */
// Readonly properties must be initialized at their declaration or in the constructor
class Octopus {
  readonly name: string;
  readonly leg: number = 8;
  constructor(thisName: string) {
    this.name = thisName;
  }
}
const dad = new Octopus('Man with the 8 strong legs');
console.log(dad.name);
console.log(dad.leg);

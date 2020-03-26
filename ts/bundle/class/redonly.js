class Octopus {
    constructor(thisName) {
        this.leg = 8;
        this.name = thisName;
    }
}
const dad = new Octopus('Man with the 8 strong legs');
console.log(dad.name);
console.log(dad.leg);

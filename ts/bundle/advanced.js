function getName1(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
let people1;
function area11(s) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.height * s.width;
        case 'circle':
            return Math.PI * Math.pow(s.radius, 2);
    }
}
class BasicCalculator {
    constructor(value = 0) {
        this.value = value;
    }
    currentValue() {
        return this.value;
    }
    add(operand) {
        this.value += operand;
        return this;
    }
    multiply(operand) {
        this.value *= operand;
        return this;
    }
}
const vv1 = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
class ScientificCalculator extends BasicCalculator {
    constructor(value = 0) {
        super(value);
    }
    sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}
const vv2 = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
function pluck11(o, propertyNames) {
    return propertyNames.map(n => o[n]);
}
let taxi1 = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014,
};
const makeAndModel = pluck11(taxi1, ['manufacturer', 'model']);
const modelYear = pluck11(taxi1, ['model', 'year']);

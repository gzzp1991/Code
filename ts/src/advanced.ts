// Type Aliases
type Name1 = string;
type NameResolver1 = () => string;
type NameOrResolver1 = Name1 | NameResolver1;
function getName1(n: NameOrResolver1): Name1 {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

type Tree1<T> = {
  value: T;
  left: Tree1<T>;
  right: Tree1<T>;
};

type LinkedList<T> = T & { next: LinkedList<T> };
interface Person11 {
  name: string;
}
let people1: LinkedList<Person11>;
// let s = people1.name;

// Discriminated Unions
interface Square11 {
  kind: 'square';
  size: number;
}
interface Rectangle11 {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle11 {
  kind: 'circle';
  radius: number;
}

type Shapee = Square11 | Rectangle11 | Circle11;
function area11(s: Shapee) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2;
  }
}

// Polymorphic this types
class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}
const vv1 = new BasicCalculator(2)
  .multiply(5)
  .add(1)
  .currentValue();

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value);
  }
  public sin() {
    this.value = Math.sin(this.value);
    return this;
  }
}
const vv2 = new ScientificCalculator(2)
  .multiply(5)
  .sin()
  .add(1)
  .currentValue();

// Index types
// function pluck(o, propertyName) {
//   return propertyName.map(k => o[k]);
// }

function pluck11<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map(n => o[n]);
}
interface Car1 {
  manufacturer: string;
  model: string;
  year: number;
}
let taxi1: Car1 = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2014,
};
const makeAndModel: string[] = pluck11(taxi1, ['manufacturer', 'model']);
const modelYear = pluck11(taxi1, ['model', 'year']);

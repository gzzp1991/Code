// Using Type Parameters in Generic Constraints
function getProperty1<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const x = { a: 1, b: 2, c: 3, d: 4 };
getProperty1(x, 'a'); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// Using Class Types in Generics
class BeeKeeper {
  hasMask: boolean;
}
class ZooKeeper {
  nametag: string;
}
class Annimal {
  numLegs: number;
}
class Beee extends Annimal {
  keeper: BeeKeeper;
}
class Liion extends Annimal {
  keeper: ZooKeeper;
}
function createInstance<A extends Annimal>(c: new () => A): A {
  return new c();
}
createInstance(Liion).keeper.nametag; // typechecks!
createInstance(Beee).keeper.hasMask; // typechecks!

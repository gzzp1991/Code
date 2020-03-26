function getProperty1(obj, key) {
    return obj[key];
}
const x = { a: 1, b: 2, c: 3, d: 4 };
getProperty1(x, 'a');
class BeeKeeper {
}
class ZooKeeper {
}
class Annimal {
}
class Beee extends Annimal {
}
class Liion extends Annimal {
}
function createInstance(c) {
    return new c();
}
createInstance(Liion).keeper.nametag;
createInstance(Beee).keeper.hasMask;

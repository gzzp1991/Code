function identityy<T>(arg: T): T {
  return arg;
}

const myIdentityy: <T>(arg: T) => T = identityy;
const myIdentityy1: <U>(arg: U) => U = identityy;

interface GenericIdentityFn {
  <T>(arg: T): T;
}
const myIdentityy2: GenericIdentityFn = identityy;

interface GenericIdentityFn1<T> {
  (arg: T): T;
}
const myIdentityy3: GenericIdentityFn1<number> = identityy;

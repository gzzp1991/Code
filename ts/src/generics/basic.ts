function identityNumber(arg: number): number {
  return arg;
}
function identityStr(arg: string): string {
  return arg;
}

function identity<T>(arg: T): T {
  return arg;
}

// const outputNumber = identity(1);
const outputNumber = identity<number>(1);
console.log(outputNumber);
const outputStr = identity('1');
console.log(outputStr);

function loggingIdentity1<T>(arg: T): T {
  // console.log(arg.length); // Error: T doesn't have .length
  return arg;
}
function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
function loggingIdentity3<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

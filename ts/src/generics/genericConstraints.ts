// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length); // Error: T doesn't have .length
//   return arg;
// }

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
loggingIdentity('3');
loggingIdentity({ length: 1 });

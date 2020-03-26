const a: boolean = true;
const b: number = 1;
const c: string = 'a';
const d: number[] = [1, 2];
const e: Array<number> = [1, 2];
// Tuple
let x: [string, number];
x = ['a', 2];
// Void
function warnUser(): void {
  console.log('This is my warning message2');
}
warnUser();
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given

export {};

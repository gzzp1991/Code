/**
 * Class Types
 */
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }
// class Clock implements ClockInterface {
//   currentTime: Date = new Date();
//   setTime = (d: Date) => {
//     this.currentTime = d;
//   };
//   constructor(h: number, m: number) {}
// }
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}
const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick = () => {
    console.log('beep beep');
  };
};

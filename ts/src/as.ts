// 将一个联合类型的变量指定为一个更加具体的类型
// 编译阶段起作用，无运行时影响
function func(val: string | number): number {
  if ((val as string).length) {
    return (val as string).length;
  } else {
    return val.toString().length;
  }
}

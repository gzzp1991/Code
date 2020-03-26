let aa: number[] = [1, 2, 3, 4];
const ro: ReadonlyArray<number> = aa;
// ro[0] = 1; // 类型“readonly number[]”中的索引签名仅允许读取
// ro.push(5); // 类型“readonly number[]”上不存在属性“push”
// ro.length = 100; // Cannot assign to 'length' because it is a read-only property
// a = ro; // The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'

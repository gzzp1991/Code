function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // 标记循环最小值
    let min = i;
    for (let k = i; k < len; k++) {
      if (arr[k] < arr[min]) {
        min = k;
      }
    }

    // 交换最小值和循环的起点
    if (min !== i) {
      const kk = arr[i];
      arr[i] = arr[min];
      arr[min] = kk;
    }
  }

  return arr;
}

const testArr = [1, 9, 32, 4, 23, 6, 46, 53, 654, 6, 43];
console.log(selectSort(testArr));

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // 内层循环可跳过最后i+1轮
    for (let k = 0; k < len - i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        const big = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = big;
      }
    }
  }

  return arr;
}

const testArr = [1, 9, 32, 4, 23, 6, 46, 53, 654, 6, 43];
console.log(bubbleSort(testArr));

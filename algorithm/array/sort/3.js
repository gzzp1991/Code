function insertSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    // 暂存当前值
    const now = arr[i];
    let k = i;
    while (k > 0 && arr[k - 1] > now) {
      arr[k] = arr[k - 1];
      k--;
    }

    arr[k] = now;
  }

  return arr;
}

const testArr = [1, 9, 32, 4, 23, 6, 46, 53, 654, 6, 43];
console.log(insertSort(testArr));

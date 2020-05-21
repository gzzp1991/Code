function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }

  const mid = Math.floor(len / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid, len));

  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
  const res = [];
  let i = 0;
  let j = 0;
  const lenL = leftArr.length;
  const lenR = rightArr.length;

  while (i < lenL && j < lenR) {
    if (leftArr[i] < rightArr[j]) {
      res.push(leftArr[i]);
      i++;
    } else {
      res.push(rightArr[j]);
      j++;
    }
  }

  if (i < lenL) {
    return res.concat(leftArr.slice(i));
  } else {
    return res.concat(rightArr.slice(j));
  }
}

const testArr = [1, 9, 32, 4, 23, 6, 46, 53, 654, 6, 43];
console.log(mergeSort(testArr));

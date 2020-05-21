function nearToSymmetry(str) {
  let left = 0;
  let right = str.length - 1;

  // 回文判断
  while (left < right && str[left] === str[right]) {
    left++;
    right--;
  }

  // 是回文，返回false
  if (left >= right) {
    return false;
  }

  // 不是回文，去掉left或right后，判断是否回文
  if (isSymmetry(left + 1, right) || isSymmetry(left, right - 1)) {
    return true;
  }

  return false;

  // 判断是否回文
  function isSymmetry(start, end) {
    while (start <= end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}

console.log(nearToSymmetry('abccbga'));

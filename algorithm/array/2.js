function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      // nums1末尾大
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      // nums2末尾大
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }

  // nums2剩余
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }

  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

function searchRange(nums, target) {
  let start = -1;
  let end = -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      end = mid;
      break;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  while (start > -1 && nums[start - 1] === target) {
    start--;
  }
  while (end > -1 && nums[end + 1] === target) {
    end++;
  }

  return [start, end];
}

console.log(search([5, 7, 7, 8, 8, 10], 10));

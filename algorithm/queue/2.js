const maxSlidingWindow = function(nums, k) {
  const result = [];
  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }

    queue.push(i);

    while (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

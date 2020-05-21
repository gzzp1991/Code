const maxSlidingWindow = function(nums, k) {
  const len = nums.length;
  const res = []; // 结果
  const queue = []; // 初始化队列，缓存当前窗口值(倒序)
  for (let i = 0; i < len; i++) {
    // 小于当前值时，从queue出队列
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }
    // 当前i入队列
    queue.push(i);

    while (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    if (i >= k - 1) {
      res.push(nums[queue[0]]);
    }
  }

  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

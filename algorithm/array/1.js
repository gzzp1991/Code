const twoSum = (nums, sum) => {
  const cache = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const now = nums[i];
    const diff = sum - now;
    const diffIndex = cache[String(diff)];

    if (typeof diffIndex === 'number') {
      return i > diffIndex ? [diffIndex, i] : [i, diffIndex];
    }
    cache[String(now)] = i;
  }
};

console.log(twoSum([2, 7, 8, 11, 15], 26));

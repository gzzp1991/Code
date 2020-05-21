// 双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：该数组必须有序。
// 否则双指针根本无法帮助我们缩小定位的范围，压根没有意义。

// 固定其中一个数，在剩下的数中寻找是否有两个数和这个固定数相加是等于0的

function threeSum(nums, sum) {
  // 排序
  const sortnums = nums.sort((a, b) => {
    return a - b;
  });
  const len = sortnums.length;

  const result = [];

  // 注意len - 2
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;

    // 如果sortnums[i]和前一个值相等，跳过
    if (i > 0 && sortnums[i] === sortnums[i - 1]) {
      continue;
    }

    while (left < right) {
      // 求和
      const three = sortnums[i] + sortnums[left] + sortnums[right];
      if (three < sum) {
        // 比sum小，left + 1
        left++;
        // 细节待补充，右移判断值是否重复
      } else if (three > sum) {
        // 比sum大，right - 1
        right--;
        // 细节待补充，左移判断值是否重复
      } else {
        // 等于sum，保存结果
        result.push([sortnums[i], sortnums[left], sortnums[right]]);

        // left + 1 && right -1，继续寻找
        left++;
        // 细节待补充，右移判断值是否重复
        right--;
        // 细节待补充，左移判断值是否重复
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));

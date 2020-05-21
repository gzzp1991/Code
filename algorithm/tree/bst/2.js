/**
 *   7
 *    \
 *     8
 *      \
 *       9
 *        \
 *         10
 *          \
 *          11
 */
const tree = {
  val: '7',
  right: {
    val: '8',
    val: '8',
    right: { val: '9', right: { val: '10', right: { val: '11' } } },
  },
};

function TreeNode(val) {
  this.val = val;
}

function balancedBST(root) {
  const nums = [];

  // 首先得到有序数组
  middleOrder(root);

  // 遍历：取中间值，构造平衡树
  return build(0, nums.length - 1);

  function build(low, high) {
    if (low > high) {
      return;
    }

    const mid = low + Math.floor((high - low) / 2);

    const cur = new TreeNode(nums[mid]);
    const left = build(low, mid - 1);
    const right = build(mid + 1, high);

    if (left) {
      cur.left = left;
    }
    if (right) {
      cur.right = right;
    }

    return cur;
  }

  function middleOrder(node) {
    if (!node) {
      return;
    }

    middleOrder(node.left);
    nums.push(node.val);
    middleOrder(node.right);
  }
}

console.log(balancedBST(tree));

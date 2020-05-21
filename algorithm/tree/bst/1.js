/**
 *       7
 *      / \
 *     4   8
 *    / \   \
 *   1   6   9
 */
const tree = {
  val: '7',
  left: {
    val: '4',
    left: { val: '1' },
    right: { val: '6' },
  },
  right: {
    val: '8',
    right: { val: '9' },
  },
};

function isBalanced(root) {
  let flag = true;

  dfs(root);

  return flag;

  function dfs(node) {
    if (!node || !flag) {
      return 0;
    }

    const leftDeep = dfs(node.left);
    const rightDeep = dfs(node.right);

    if (Math.abs(leftDeep - rightDeep) > 1) {
      flag = false;
      return 0;
    }

    return Math.max(leftDeep, rightDeep) + 1;
  }
}

console.log(isBalanced(tree));

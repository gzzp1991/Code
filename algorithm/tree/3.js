/**
 *       A
 *      / \
 *     B   C
 *    / \   \
 *   D   E   F
 */
const tree = {
  val: 'A',
  left: {
    val: 'B',
    left: { val: 'D' },
    right: { val: 'E' },
  },
  right: {
    val: 'C',
    right: { val: 'F' },
  },
};

function levelOrder(root) {
  const res = [];

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const level = [];
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const top = queue.shift();
      level.push(top.val);

      if (top.left) {
        queue.push(top.left);
      }

      if (top.right) {
        queue.push(top.right);
      }
    }

    res.push(level);
  }

  return res;
}

console.log(levelOrder(tree));

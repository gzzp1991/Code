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

function middleOrder(root) {
  const res = [];

  const stack = [];
  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    res.push(cur.val);

    cur = cur.right;
  }

  return res;
}

console.log(middleOrder(tree));

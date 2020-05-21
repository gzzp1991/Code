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

function preOrder(root) {
  const res = [];

  const stack = [];
  stack.push(root);

  let cur;

  while (stack.length) {
    cur = stack.pop();
    res.push(cur.val);

    if (cur.right) {
      stack.push(cur.right);
    }

    if (cur.left) {
      stack.push(cur.left);
    }
  }

  return res;
}

function postOrder(root) {
  const res = [];
  const stack = [];
  stack.push(root);

  let cur;

  while (stack.length) {
    cur = stack.pop();
    res.unshift(cur.val);

    if (cur.left) {
      stack.push(cur.left);
    }

    if (cur.right) {
      stack.push(cur.right);
    }
  }

  return res;
}

console.log(preOrder(tree));
console.log(postOrder(tree));

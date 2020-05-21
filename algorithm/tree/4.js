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

function tureoverTree(root) {
  if (!root) {
    return root;
  }

  const left = tureoverTree(root.right);
  const right = tureoverTree(root.left);

  if (left) {
    root.left = left;
  }
  if (right) {
    root.right = right;
  }

  return root;
}

console.log(tureoverTree(tree));

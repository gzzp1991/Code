const { createLink } = require('./util');

function reverseLink(head) {
  let pre = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
}

let node = reverseLink(createLink(1, 2, 3, 4, 5));
while (node) {
  console.log(node.val);
  node = node.next;
}

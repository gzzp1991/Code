const { createLink } = require('./util');

function removeRepeatNode(head) {
  let cur = head;

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
}

let node = removeRepeatNode(createLink(1, 1, 2, 3, 3));
while (node) {
  console.log(node.val);
  node = node.next;
}

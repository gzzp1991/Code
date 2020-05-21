const { createLink, LinkNode } = require('./util');

function removeRepeatNode(head) {
  const dummy = new LinkNode();
  dummy.next = head;

  let cur = dummy;

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const value = cur.next.val;
      while (cur.next && cur.next.val === value) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}

let node = removeRepeatNode(createLink(1, 1, 2, 3, 3, 4, 5, 6, 6, 7));
while (node) {
  console.log(node.val);
  node = node.next;
}

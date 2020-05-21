const { createLink } = require('./util');

function removeNthFromEnd(head, n) {
  let left = head;
  let right = head;

  while (n-- > 0) {
    right = right.next;
  }

  while (right.next) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return head;
}

let node = removeNthFromEnd(createLink(1, 2, 3, 4, 5), 2);
while (node) {
  console.log(node.val);
  node = node.next;
}

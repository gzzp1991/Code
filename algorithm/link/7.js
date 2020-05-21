const { LinkNode } = require('./util');

const node1 = new LinkNode(1);
const node2 = new LinkNode(2);
const node3 = new LinkNode(3);
const node4 = new LinkNode(4);
const node5 = new LinkNode(5);
const node6 = new LinkNode(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node2;

function startOfCycle(head) {
  if (!head || !head.next) {
    return null;
  }

  let cur = head;
  while (cur) {
    if (cur.flag) {
      return cur;
    }

    cur.flag = true;
    cur = cur.next;
  }

  return null;
}

console.log(startOfCycle(node1));

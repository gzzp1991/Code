const { createLink, LinkNode } = require('./util');

function reverseBetween(head, m, n) {
  const dummy = new LinkNode();
  dummy.next = head;

  let start; // m节点
  let preOfstart; // m-1节点

  let pre = null;
  let cur = head;

  // pre定位至m-1，cur定位至m
  let i = 0;
  while (i++ < m - 1) {
    pre = cur;
    cur = cur.next;
  }

  // 记录preOfstart、start
  preOfstart = pre;
  start = cur;

  // 局部反转
  for (i = m; i < n + 1; i++) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  // m-1节点next指向n节点
  preOfstart.next = pre;
  // m节点next指向n+1节点
  start.next = cur;

  return dummy.next;
}

let node = reverseBetween(createLink(1, 2, 3, 4, 5, 6, 7, 8, 9), 5, 7);
while (node) {
  console.log(node.val);
  node = node.next;
}

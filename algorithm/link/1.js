const { createLink, LinkNode } = require('./util');

function mergeTwoLinks(list1, list2) {
  const head = new LinkNode();
  let cur = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  cur.next = list1 || list2;
  return head.next;
}

let merge = mergeTwoLinks(createLink(1, 2, 4), createLink(1, 3, 4));
while (merge) {
  console.log(merge.val);
  merge = merge.next;
}

function LinkNode(val) {
  this.val = val;
  this.next = null;
}

function createLink(...values) {
  const reverse = values.reverse();
  return reverse.reduce((prev, val) => {
    const now = new LinkNode(val);
    if (prev) {
      now.next = prev;
    }
    return now;
  }, undefined);
}

module.exports = { createLink, LinkNode };

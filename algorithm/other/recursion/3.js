function combine(n, k) {
  const res = [];
  const subset = [];

  dfs(1);
  return res;

  function dfs(index) {
    if (subset.length === k) {
      res.push([...subset]);
      return;
    }

    for (let i = index; i <= n; i++) {
      subset.push(i);
      dfs(i + 1);
      subset.pop();
    }
  }
}

console.log(combine(5, 2));

function countBy(x, n) {
  let z = [];
  z[0] = x;
  for (let i = 1 ; i < n; i++) z[i]=(z[i-1]+x);
  return z;
}
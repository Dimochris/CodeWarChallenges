function digitize(n) {
  const str = n.toString();
  const digits = str.length;
  let arr = []
  for (let i = digits-1 ; i >= 0 ; i --) arr.push(Number(str[i]));
  return arr;
}
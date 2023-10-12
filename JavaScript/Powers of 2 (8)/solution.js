function powersOfTwo(n) {
  let arr = [1];
  for (let i = 1; i <= n; i++) arr.push(Math.pow(2,i));
  return arr;
}

console.log(powersOfTwo(4));


function powersOfTwo(n) {
  return Array.from({length: n + 1}, (v, k) => 2 ** k);
}
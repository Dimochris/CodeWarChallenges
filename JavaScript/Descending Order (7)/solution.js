function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

console.log(descendingOrder(1021) == 2110);

// other solution
function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}
function XO(str) {
  let counterO = 0;
  let counterX = 0;
  for (let i = 0; i < str.length; i++) {
    (str[i] === "O" || str[i] === "o") && counterO++;
    (str[i] === "X" || str[i] === "x") && counterX++;
  }
  return counterO == counterX;
}

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));

// solution 2
function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
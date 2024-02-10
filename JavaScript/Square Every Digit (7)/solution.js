function squareDigits(num) {
  let str = "";
  num
    .toString()
    .split("")
    .forEach((element => {
      element **= 2;
      str += element.toString();
    }));
  return parseInt(str);
}

console.log(squareDigits(3212) == "9414");
console.log(strictEqual(squareDigits(2112) == 4114));
console.log(strictEqual(squareDigits(0) == 0));


function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}
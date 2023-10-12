function fakeBin(x){
    let arr = x.split('');
    x = '';
    arr.forEach(el => {
      x += el >= 5 ? 1 : 0;
    });
    return x;
}

console.log(fakeBin('45385593107843568') == '01011110001100111');
console.log(fakeBin('509321967506747') == '101000111101101');
console.log(fakeBin('366058562030849490134388085') == '011011110000101010000011011');

function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
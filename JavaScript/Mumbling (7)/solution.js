function accum(s) {
  let arr = s.split("");
  let str = "";
  arr.forEach((el, i) => {
    for (let j = 1; j <= i + 1; j++) {
      str += j == 1 ? el.toUpperCase() : el.toLowerCase();
    }
    str += i < arr.length-1 ? "-" : "";
  });
  return str;
}

console.log(accum("ZpglnRxqenU"));


function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
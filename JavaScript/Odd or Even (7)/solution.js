function oddOrEven(array) {
  let sum = 0;
	array.map((el) => (sum += el));
	return sum % 2 === 0 ? 'even' : 'odd';
}

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
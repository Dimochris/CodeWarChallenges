function maps(x){
  return x.map((el) => Math.pow(el, 2));
  // second solution
  // for(el in x) x[el] = Math.pow(x[el],2)
  // return x
}


function maps(x){
  return x.map(n => n * 2);
}

maps = x => x.map(e => e * 2);
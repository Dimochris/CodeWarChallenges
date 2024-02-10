function minMax(arr){
  return [Math.min.apply(null, arr),Math.max.apply(null, arr)]; // fix me!
}

minMax([1, 2, 3, 4, 5]);


function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}
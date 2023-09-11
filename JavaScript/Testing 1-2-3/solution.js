var number=function(array){
  if (array.length === 0 ) return [];
  let counter = 0;
  array.map(el =>
  {
    counter++;
    el = counter+": "+el;
    array[counter-1]=el;
});
return array;
}


var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)
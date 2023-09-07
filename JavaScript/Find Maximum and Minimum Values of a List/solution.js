var min = function(list){
  let minim = list[0];
  for(let i = 1 ; i < list.length ; i++){
    if (list[i] < minim ) minim = list[i];
  }
  return minim;
}

var max = function(list){
  let maxim = list[0];
  for(let i = 1 ; i < list.length ; i++){
    if (list[i] > maxim ) maxim = list[i];
  }
  return maxim;
}
function isIsogram(str){
  return str.toLowerCase().length === new Set(str.toLowerCase()).size;
}
function countSheeps(arrayOfSheep) {
  let counter = 0;
  arrayOfSheep.forEach((el)=> el && counter++) //if(el==true) ? counter++ : nothing
  return counter;
}
function feast(beast, dish) {
   return (beast[0] === dish[0] && beast[beast.length-1] ===  dish[dish.length-1])
 }


 function feast(beast, dish) {
   return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
 }
 
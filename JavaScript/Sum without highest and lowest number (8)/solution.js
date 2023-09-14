function sumArray(array) {
  if (array == null) return 0;
  if (array.length <= 1) return 0;
  let max = min = sum =  array[0];
  for (let i = 1 ; i < array.length; i++){
      if (max < array[i]) {
          max = array[i];
      }else if (min > array[i]){
          min = array[i]
      }
      sum += array[i];
  }
  return sum-max-min;
}
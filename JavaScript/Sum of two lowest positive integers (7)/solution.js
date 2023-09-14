function sumTwoSmallestNumbers(numbers) {  
  let numbersSorted =  numbers.sort((a,b)=>a-b)
  return numbersSorted[0]+numbersSorted[1]
}
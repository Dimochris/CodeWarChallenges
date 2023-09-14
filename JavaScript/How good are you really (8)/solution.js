function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for(num in classPoints) sum+= classPoints[num];
  return yourPoints > sum/classPoints.length;
}


function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
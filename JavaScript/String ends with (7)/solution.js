function solution(str, ending){
  // TODO: complete
  let str1 = str.split('');
  let str2 = ending.split('');
  let check = true;
  let start =  str1.length-1;
  for (let i = str2.length-1 ; i>=0 ; i--){
    console.log(i," - ", str1[start], " - ", str2[i]," - ", check )
    if (str2[i]!= str1[start--]) { check = false;}
  }
  console.log(check);
  return check;
}


solution('sumo', 'omo')

// 
function solution(str, ending){
  return str.endsWith(ending);
}
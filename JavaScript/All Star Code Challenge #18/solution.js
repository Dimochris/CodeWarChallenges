function strCount(str, letter) {
  let newStr = str.split("");
  let position = 0;
  for (let i = str.length-1 ; i >=0 ; i-- ){
    if (newStr[i] == letter){
      position = str.length-i;
      break;
    }
  }
  if (str.length == 0) return 0;
  return position;
}

console.log(strCount("ghgezlbjzilkkjzjgcffedggaakebizfkjkkeccjkaheidkhdfdjjzkbkgldafhfcfdkkdefzzlckjihzfdeajaihzleidelgkldcfkkcegfkebzezegiihchgellbjaacfbldigdacdihhclzjehzzlczblklbdebgleejjabkbcbiffbldkccgllecizzbeghlblhdgazalgzdhegcelizkzdzfgfjeblbebkjjfjbacffgd", "i"));

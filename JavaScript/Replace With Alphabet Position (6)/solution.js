function alphabetPosition(text) {
  let arrayOfLetters = [];
  let newtext = ''
  // create a table with letters 
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) arrayOfLetters.push(String.fromCharCode(i));
  // make text lowercase , replace spacial char, replace numbers , replace spaces, this is a table with one element so I take the first one and for 
  // every element take index of arrayOfLetters + 1 to beggin with 1 and added one space in the end
  text.toLowerCase().replace(/[^a-zA-Z]/g, '').split(' ')[0].split('').forEach(el => {newtext += (arrayOfLetters.indexOf(el)+1) + ' '});
  // I don't need space In the end of all and return it
  return (newtext.trim());
}
//alphabetPosition("The sunset sets at twelve o' clock.");//, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
console.log(alphabetPosition("7ip:>!{d"));//, "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20";

// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11


function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');



function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.toLowerCase().split('')
  .filter( letter => {
    let index = alphabet.indexOf(letter);
    return index > -1;
  }  )
  .map( letter => alphabet.indexOf(letter) + 1 )
  .join(' ')
}
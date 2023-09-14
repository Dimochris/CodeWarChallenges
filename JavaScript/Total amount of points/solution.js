function points(games) {
  let score = 0;
  games.map(el => {
    if (parseInt(el[0]) >  parseInt(el[2])) score = score + 3;
    if (parseInt(el[0]) ==  parseInt(el[2])) score = score + 1;
  });
  return score;

  // second way 
  // return games.reduce((score, game) => score + (game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0), 0);
  // third way distructuring
  //return games.reduce((score, game) => { const [team1, _, team2] = game.split(':').map(Number);}
}



console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
//console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
//console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));
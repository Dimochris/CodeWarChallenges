function DNAStrand(dna){
    return dna.split('').map(el => {
      switch (el){
        case ('A'):
          el = 'T';
          break;
        case ('T'):
          el = 'A';
          break;
        case ('C'):
          el = 'G';
          break;
        case ('G'):
          el = 'C';
          break;
        default:
          break;
      }
      return el;
    }).join('');
  
  // second way
  //const basePairs = {A: 'T', T: 'A',  C: 'G',  G: 'C' };
  //return dna.split('').map(el => basePairs[el]).join('');
}
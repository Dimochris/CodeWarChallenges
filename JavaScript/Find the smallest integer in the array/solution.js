class SmallestIntegerFinder {
  findSmallestInt(args) {
      if (args.length > 0) {
        let min = args[0];
        for (let i=0 ; i<args.length; i++){
            if (min > args[i]) min = args[i];   
        } 
        return min
      }
  }
}
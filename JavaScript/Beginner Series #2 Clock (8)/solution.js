function past(h, m, s){
  //#Happy Coding! ^_^
  return (s + m * 60+ h * 60 * 60) * 1000 // (sec + minToSec + hoursToSec) * mSec
}


const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);
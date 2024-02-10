function getGrade (s1, s2, s3) {
  let av = (s1+s2+s3)/3
  if (av >= 90 && av <= 100) return 'A';
  if (av >= 80 && av <= 90) return 'B';
  if (av >= 70 && av <= 80) return 'C';
  if (av >= 60 && av <= 70) return 'D';
  if (av >= 0 && av <= 60) return 'F';
}

getGrade(95,90,93);
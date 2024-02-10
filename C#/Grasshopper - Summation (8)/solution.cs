using System;

public static class Kata 
{
    public static int summation(int num)
    {
      int sum = 0 ;
      for(int i =0 ; i <= num; i++) sum+=i;
      return sum;
    }
}



public static class Kata 
{
    public static int summation(int num)
    {
      return Enumerable.Range(1, num).Sum();
    }
}
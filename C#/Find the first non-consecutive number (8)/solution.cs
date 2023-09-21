public class Kata
{
  public static object FirstNonConsecutive(int[] arr)
  {
  for (int i = 0; i < arr.Length-1; i++)
    {
        if (arr[i] + 1 != arr[i + 1]) return arr[i + 1];
    }
    return null;
  }
}

AreEqual(6, Kata.FirstNonConsecutive(new int[] {1, 2, 3, 4, 6, 7, 8}));
AreEqual(null, Kata.FirstNonConsecutive(new int[] {1, 2, 3, 4}));
    
public class Kata
{
  public static string RemoveExclamationMarks(string s)
  {
    return s.Replace("!", "");
  }
}

// TESTS 
Assert.AreEqual("", Kata.RemoveExclamationMarks(""), "Input: Empty string");
Assert.AreEqual("", Kata.RemoveExclamationMarks("!"), "Input: " + "!");
Assert.AreEqual("", Kata.RemoveExclamationMarks("!!"), "Input: " + "!!");
Assert.AreEqual("Hi", Kata.RemoveExclamationMarks("Hi!"), "Input: " + "Hi!");
Assert.AreEqual("?", Kata.RemoveExclamationMarks("!?!"), "Input: " + "!?!");

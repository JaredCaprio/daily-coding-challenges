/* 1. https://www.codewars.com/kata/52756e5ad454534f220001ef/train/javascript  
Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.
Subsequence

A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.
Example subsequence

Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".
LCS examples

LCS( "abcdef" , "abc" ) => returns "abc"
LCS( "abcdef" , "acf" ) => returns "acf"
LCS( "132535365" , "123456789" ) => returns "12356"

Notes

    Both arguments will be strings
    Return value must be a string
    Return an empty string if there exists no common subsequence
    Both arguments will have one or more characters (in JavaScript)
    All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".

*/
function LCS(text1, text2) {
  const table = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill("")
  );

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + text1[i - 1];
      } else {
        let aboveChar = table[i - 1][j];
        let leftChar = table[i][j - 1];

        table[i][j] = aboveChar.length > leftChar.length ? aboveChar : leftChar;
      }
    }
  }
  if (table[table.length - 1][table[0].length - 1] === 0) {
    return "";
  } else {
    return table[table.length - 1][table[0].length - 1].toString();
  }
}     

  

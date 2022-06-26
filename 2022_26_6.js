/* 1. Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

const friend = (friends) => friends.filter((name) => name.length === 4);

/* 2. Implement a function that accepts 3 integer values a, b, c. The function 
should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).
 */

const isTriangle = (a, b, c) => a + b > c && b + c > a && a + c > b ? true: false;

/* 3. Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

const findShort = (s) => {
  let words = s.split(" ");
  var shortest = words.reduce((longestword, currentword) =>
    currentword.length < longestword.length ? currentword : longestword
  );
  return shortest.length;
};

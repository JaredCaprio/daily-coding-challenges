/* 1. When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/
function position(letter) {
  let lowerCase = letter.toLowerCase();
  let code = lowerCase.charCodeAt(0);
  return `Position of alphabet: ${code - 96}`;
} 
/*2. Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/
function largestPairSum(numbers) {
  let sorted = numbers.sort((a, b) => {
    return b - a;
  });
  return sorted[0] + sorted[1];
}

/*3.You're on your way to the market when you hear beautiful music coming from a nearby street performer.
The notes come together like you wouln't believe as the musician puts together patterns of tunes. 
As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, 
it dawns on you that you have been watching the musician for some 10 odd minutes. 
You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster 
almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall
beast from the paleolithic era; B) it will ask you for tree fiddy.

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". 
Since you are tired of being grifted by this monster, the time has come to code a solution for finding 
The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty".
 */

function isLockNessMonster(s) {
  if (s.includes("tree fiddy") || s.includes("3.50")) {
    return "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.";
  } else {
    
  }
}

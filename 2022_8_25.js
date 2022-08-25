/*1. For every good kata idea there seem to be quite a few bad ones!
In this kata you need to check the provided array (x) for good ideas 
'good' and bad ideas 'bad'. If there are one or two good ideas, return 
'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.
 */
function well(x) {
  let goodCount = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      goodCount += 1;
    }
  }
  if (goodCount > 2) return "I smell a series!";
  if (goodCount === 0) return "Fail!";
  if (goodCount > 0) return "Publish!";
}
/*2. An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
Example

text before = "abc"
character   = "z"
text after  = "zzz"
 */
function contamination(text, char) {
  return char.repeat(text.length);
}

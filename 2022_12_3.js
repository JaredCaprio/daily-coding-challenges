/*1. https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

const pigIt =(str) => {
  return str
    .split(" ")
    .map((word) => {
      if (word.match(/[a-zA-Z]/g)) {
        let firstLet = word.slice(0, 1);
        return word.slice(1) + firstLet + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
}

/* 2. 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
const order = (words) => {
  if (words.length === 0) return words;
  const findNumber = words.match(/[1-9]/g);
  console.log(findNumber);
  let nS = [];
  findNumber.forEach((str) => {
    nS.push(parseInt(str));
  });
  console.log(nS);
  const arrayWords = words.split(" ");

  let result = [];

  arrayWords.map((_, i) => {
    const index = nS.indexOf(i + 1);

    result.push(arrayWords[index]);
  });

  return result.join(" ");
};

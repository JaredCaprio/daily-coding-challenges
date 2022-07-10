/* 1. You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)*/ 

function stray(numbers) {
  let result = numbers
    .filter((item, _, array) => {
      return array.indexOf(item) === array.lastIndexOf(item);
    })
    .join("");
  return parseInt(result);
}

/* 2.  Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]*/

function countSmileys(arr) {
  let result = 0;
  let someArr = arr.some((element) => {
    if (/[)]|D/g.test(element) && /:|;/g.test(element)) {
      result++;
    }
  });
  return result;
}

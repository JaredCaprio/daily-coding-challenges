/* 1. A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple 
of powerful dragons! each dragon takes 2 bullets to be defeated, our 
hero has no idea how many bullets he should carry.. Assuming he's gonna 
grab a specific given number of bullets and move forward to fight another
specific given number of dragons, will he survive?
Return True if yes, False otherwise :)
*/

const hero = (bullets, dragons) => bullets >= dragons * 2;

/* 2. Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/
const squareDigits = (num) => {
  let splitNum = num.toString().split("");
  let result = splitNum.map((n) => Math.pow(n, 2)).join("");
  return parseInt(result);
};

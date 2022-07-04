/* 1. Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
*/

function booleanToString(b){
  return b.toString();
}

/*2. Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/

function paperwork(n, m) {
  if (n < 1 || m < 1 ){
    return 0
  } else {
    return n * m;
  }
}

/* 3.  Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string
*/

function fakeBin(x) {
  let underFive = x.replace(/[0-4]/g, "0");
  let overFive = underFive.replace(/[5-9]/g, "1");  
  return overFive;
}

/* 4. Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
 */

const reverseSeq = (n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

/* 1. https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/
function validParentheses(parens) {
  let arrStack = [];
  for (let i = 0; i < parens.length; i++) {
    let char = arrStack[arrStack.length - 1];
    if (parens[i] === "(") {
      arrStack.push(parens[i]);
    } else if (char === "(" && parens[i] === ")") {
      arrStack.pop();
    } else return false;
  }
  console.log(arrStack);
  return arrStack.length ? false : true;
}

/*2.  https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples

 123 ->  321
-456 -> -654
1000 ->    1
*/
function reverseNumber(n) {
  let poopCakes = n.toString().split("").reverse();
  let isNeg;
  if (poopCakes[poopCakes.length - 1] === "-") {
    isNeg = true;
    poopCakes.pop();
  }
  if (isNeg) {
    return parseInt("-" + poopCakes.join(""));
  } else {
    return parseInt(poopCakes.join(""));
  }
}

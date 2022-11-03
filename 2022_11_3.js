/*1. https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

/*2. https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases. 
*/
function solve(s) {
  let upper = s.match(/[A-Z]/g) || "";
  let lower = s.match(/[a-z]/g) || "";
  let numbers = s.match(/[0-9]/g) || "";
  let specChar = s.match(/[^a-zA-Z0-9]/g) || "";
  return new Array(upper.length, lower.length, numbers.length, specChar.length);
}

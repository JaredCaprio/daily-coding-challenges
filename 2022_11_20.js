/* 1. https://www.codewars.com/kata/5840107b6fcbf56d2000010b/javascript
You are given string "elements" and an int "n". Your task is to return a string that is a palindrom using elements from the string "elements" with the length "n".

The format of the palindromization:

    Your palindrome begins with the first element of "elements".
    After obtaining a pair, you insert the next element in "elements" to the palindrome.
    The next element will be paired inside the first pair.
    Repeat
    If you have reached the last element of "elements" then repeat the process from the start.

Error cases:
If the string elements is empty or n is smaller than 2, return the string "Error!" 
*/
function palindromization(element, n){
  let s = ''
  let i = 0;
  while(s.length < Math.floor(n/ 2)) s += element[i++ % element.length];
  let c = s.split('').reverse().join('');
  if (n % 2 === 1) s += element[i % element.length];
  if (element == "" || n < 2) return "Error!"
  return s + c
}

/* 2. https://www.codewars.com/kata/51dda84f91f5b5608b0004cc/train/javascript
Write a function that takes an integer and returns an array [A, B, C], where A is the number 
of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 
(but not 3) below the given integer and C is the number of multiples of 3 and 5 below the 
given integer.

For example, solution(20) should return [5, 2, 1]
*/
function solution(number) {
  let fizz = 0;
  let buzz = 0;
  let fizzBuzz = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {      
      fizzBuzz++;
    } else if (i % 3 === 0) {      
      fizz++;
    } else if (i % 5 === 0) {      
      buzz++;
    } 
  }

  return new Array(fizz, buzz, fizzBuzz);
}

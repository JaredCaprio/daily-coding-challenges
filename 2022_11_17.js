/*1. https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Requirements

    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
    NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
*/
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {    
    if (num % i === 0) return false;
  }
  return num > 1;
};


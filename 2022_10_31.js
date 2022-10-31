/*1. https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
Example

123  => 6
223  => 7
1337 => 14
*/
const getSumOfDigits = (integer) =>
  integer
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reduce((curr, prev) => prev + curr);

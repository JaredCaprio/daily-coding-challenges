/*1. Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".*/

function disemvowel(str) {
  let newString = str.replace(/[aeiou]/gi, "");
  return newString;
}

/*2. Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.*/

function addBinary(a,b) {
  let c = a + b;
  return c.toString(2);  
}


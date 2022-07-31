/* 1. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/
const even_or_odd = (number) => number % 2 === 0 ? "Even" : "Odd";
/* 2. Write a function that returns a string in which firstname is swapped with last name. */
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

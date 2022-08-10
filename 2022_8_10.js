/*1. Complete the function which converts a binary number (given as a string) to a decimal number.*/
function binToDec(bin) {
  return parseInt(bin, 2);
}
/*2. Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.*/
function replace(s) {
  return s.replace(/[aeiou]/gi, "!");
}
/* 3. Write a function that takes an array of words and smashes them together
into a sentence and returns the sentence. You can ignore any need to sanitize 
words or add punctuation, but you should add spaces between each word. Be careful,
there shouldn't be a space at the beginning or the end of the sentence!*/
function smash(words) {
  return words.join(" ");
}


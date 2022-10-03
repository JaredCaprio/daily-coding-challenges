/*1. You're at the zoo... all the meerkats look weird. Something has gone terribly wrong -
someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have 
three values (tail, body, head). It is your job to re-arrange the array so that the
animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to 
change the element positions with the same exact logics

Simples!
*/
function fixTheMeerkat(arr) {
  return arr.reverse();
}

/*2. You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. We want to create
the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people 
that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
 */
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

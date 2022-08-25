/*1. In this simple exercise, you will build a program that takes a value, integer,
and returns a list of its multiples up to another value, limit . If limit is a multiple 
of integer, it should be included as well. There will only ever be positive integers 
passed into the function, not consisting of 0. The limit will always be higher than the base.
For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
If you can, try writing it in only one line of code.
*/ 
function findMultiples(integer, limit) {
  let result = [];
  console.log(integer * limit);
  for (let i = 1; i <= limit / integer; i++) {
    let poop = i * integer;
    result.push(poop);
  }
  return result;
}
/*2. Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.*/
function toBinary(n) {
  let result = (n >>> 0).toString(2);
  return parseInt(result);
}
/*3. Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array.*/
const solution = (nums) => nums === null ? [] : nums.sort((a,b) => a - b);

/* 4. Messi goals function

Messi is a soccer player with goals in three leagues:

    LaLiga
    Copa del Rey
    Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid. */

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

/* 5. You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
  if (card.charCodeAt(card.length - 1) === 9827) return "clubs";
  if (card.charCodeAt(card.length - 1) === 9830) return "diamonds";
  if (card.charCodeAt(card.length - 1) === 9829) return "hearts";
  if (card.charCodeAt(card.length - 1) === 9824) return "spades";
}

/*6.  */

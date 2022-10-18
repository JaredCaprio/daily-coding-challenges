/* 1. You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]

*/
const monkeyCount = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
};
/*2. The company you work for has just been awarded a contract to build a payment gateway. In order to help move 
things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
39.99 becomes $39.99
The rest of your team will make sure that the argument is sanitized before being passed to your function although 
you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
Examples:
3 needs to become $3.00
3.1 needs to become $3.10
Good luck! Your team knows they can count on you!
 */
function formatMoney(amount) {
  let result = "$" + parseFloat(amount).toFixed(2);
  return result;
}

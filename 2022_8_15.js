/* 1. Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes of all
capital letters in the string.*/
const capitals = function (word) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 91) {
      result.push(i);
    }
  }
  return result;
};
/* 2. The purpose of this kata is to work out just how many bottles of duty free whiskey you
would have to buy such that the saving over the normal high street price would effectively cover 
the cost of your holiday.
You will be given the high street price (normPrice),
the duty free discount (discount) and the cost of the holiday.
For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save
£1 per bottle. If your holiday cost £500, the answer you should return would be 500.
All inputs will be integers. Please return an integer. Round down.
 */
function dutyFree(normPrice, discount, hol) {
  let disDec = discount / 100;
  let priceAfterDiscount = normPrice * disDec;
  let final = hol / priceAfterDiscount;
  return Math.floor(final);
}

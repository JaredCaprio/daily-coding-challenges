/*1.  https://www.codewars.com/kata/5c2ab63b1debff404a46bd12/train/javascript
John is an orchard worker.
There are n piles of fruits waiting to be transported. Each pile of fruit has a corresponding weight. 
John's job is to combine the fruits into a pile and wait for the truck to take them away.

Every time, John can combine any two piles(may be adjacent piles, or not), and the energy he costs is equal to the weight of the two piles of fruit.

For example, if there are two piles, pile1's weight is 1 and pile2's weight is 2. After merging, the new pile's weight is 3, and he consumed 3 units of energy.
John wants to combine all the fruits into 1 pile with the least energy.

Your task is to help John, calculate the minimum energy he costs.
*/
function comb(fruits) {
  let result = 0;
  let temp = [];
  fruits.sort((a, b) => b - a);

  while (fruits.length + temp.length > 1) {
    let currBox = 0;

    if (fruits[fruits.length - 1] < temp[0] || temp[0] === undefined) {
      currBox += fruits.pop();
      
    } else {
      currBox += temp.shift();
    }
    if (fruits[fruits.length - 1] < temp[0] || temp[0] === undefined) {
      currBox += fruits.pop();
      
    } else {
      currBox += temp.shift();
    }
    temp.push(currBox);
    result += currBox;
  }
  return result;
}

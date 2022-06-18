/* 1. We need a function that can transform a string into a number. What ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.*/


const stringToNumber = function(str){
  return Number(str);  
}

/* 2. Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present). */

function countSheeps(arrayOfSheep) {  
  let numOfSheep = 0;
  
  for (let i = 0; i < arrayOfSheep.length; i++){
    if (arrayOfSheep[i] === true){
      numOfSheep++;
    }
  }
  return numOfSheep;
}

/* 3. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2) {
  let flower1Status;
  let flower2Status;
  let loveStatus;
  if (flower1 % 2 == 0) {
    flower1Status = "even";
  } else {
    flower1Status = "odd";
  }
  if (flower2 % 2 == 0) {
    flower2Status = "even";
  } else {
    flower2Status = "odd";
  }

  if (flower1Status !== flower2Status) {
    loveStatus = true;
  } else {
    loveStatus = false;
  }

  return loveStatus;
}

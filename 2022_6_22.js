/* 1. Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]*/

function removeEveryOther(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

/* 2. Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	return
name equals owner 	'Hello boss'
otherwise 	'Hello guest'*/

const greet = (name, owner) => name === owner ? "Hello boss": "Hello guest";

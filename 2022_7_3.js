/* 1. Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p2 === "scissors" && p1 === "paper") {
    return "Player 2 won!";
  } else if (p2 === "paper" && p1 === "rock") {
    return "Player 2 won!";
  } else if (p2 === "rock" && p1 === "scissors") {
    return "Player 2 won!";
  } else if (p1 === p2) {
    return "Draw!";
  }
};

/* 2. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

function doubleChar(str) {
  return str
    .split("")
    .map(function (char) {
      return char + char;
    })
    .join("");
}
/* 3. If you can't sleep, just count sheep!!
Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num) {
  let result = "";
  if (num === 1) {
    return "1 sheep...";
  } else {
    for (let i = 1; i <= num; i++) {
      result += `${i} sheep...`;
    }
  }
  return result;
};









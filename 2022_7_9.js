/* 1. Nathan loves cycling.
Because Nathan knows it is important to stay hydrated,
he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return
the number of litres Nathan will drink, rounded to the smallest value.*/

function litres(time) {
   return Math.floor(time * 0.5) ;
}

/* 2. Implement a function which multiplies two numbers. */

function multiply (num1, num2){
  return num1 * num2;
}

/* 3. Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.*/

var number = function (array) {
  return array.map((item, index) => {
    return `${index + 1}: ${item}`;
  });
};

/* 4. The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which 
category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.
Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether
the respective member is to be placed in the senior or open category. */

function openOrSenior(data) {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      output.push("Senior");
    } else {
      output.push("Open");
    }
  }
  return output;
}


/* 1. Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of
his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll 
have to capitalize each word, check out how contractions are expected to be in the example below.
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, 
but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */

String.prototype.toJadenCase = function () {
  const words = this.split(" ");

  return words
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

/* 2. Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical
structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.

For example:
"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be 
valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

function DNAtoRNA(dna) {
  let splitDna = dna.split("");
  for (let i = 0; i < splitDna.length; i++) {
    if (splitDna[i] === "T") {
      splitDna[i] = "U";
    }
  }
  return splitDna.join("");
}


/*3. Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language)
that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5] */

var min = function (list) {
  let min = Math.min(...list);
  return min;
};

var max = function (list) {
  let max = Math.max(...list);
  return max;
};



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

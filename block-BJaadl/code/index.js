let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
words.reduce((a,b) => a.length > b.length ? a : b);
// - Convert the above array "words" into an array of length of word instead of word.
words.forEach((a,b) => words.splice(b, 1, a.length));
// - Create a new array that only contains word with atleast one vowel.
words.filter((vowel) => vowel.includes("a","e","i","o","u"));
// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.
words.filter((notavowel) => !notavowel.startsWith("a","e","i","o","u"));
// - Create a new array that contians words not ending with vowel
words.filter((notavowel) => !notavowel.endsWith("a","e","i","o","u"));

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
numbers.reduce((a,b) => a+b);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
numbers.filter((mutipledBy3) => mutipledBy3 % 3 == 0);
// - Create a new array that contains only even numbers
numbers.filter((evenNum) => evenNum % 2 == 0);
// - Create  a new array that contains only odd numbers.
numbers.filter((evenNum) => evenNum % 2 !== 0);
// - Create a new array that should have true for even number and false for odd numbers.
numbers.map((evenNum) => evenNum % 2 == 0);
// - Sort the above number in assending order.
numbers.sort((a,b) => a-b);
// - Does sort mutate the original array?
// Yes, sort mutates the original array
// - Find the sum of the numbers in the array.
numbers.reduce((a,b) => a+b);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
numbers.reduce((a,b) => (a+b)/numbers.length);
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words and calculate the average length of the words.
strings.map((averageWordLength) => averageWordLength.length/numbers.length);
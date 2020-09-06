// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
strings.filter((wordwithis) => wordwithis.includes("is"));
// - Find all the words that contain 'is' use string method 'indexOf'
strings.filter((wordwithis) => wordwithis.indexOf("is")+1);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((divisibleBy2) => divisibleBy2 % 2 == 0);
// -  Sort Array from smallest to largest
numbers.sort((a,b) => a-b);
// - Remove the last word in strings
numbers.pop();
// - Find largest number in numbers
numbers.sort((a,b) => b-a)[0];
// - Find longest string in strings
strings.reduce((a,b) => a.length > b.length ? a : b);
// - Find all the even numbers
numbers.filter((evennum) => evennum%2 == 0);
// - Find all the odd numbers
numbers.filter((evennum) => evennum%2 !== 0);
// - Place a new word at the start of the array use (unshift)
strings.unshift("Hello");
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(numbers.indexOf(18), numbers.indexOf(11)+1);
// numbers.slice(numbers.indexOf(18), numbers.indexOf(18)+4);
// - Make a subset of strings array ['a','collection']
strings.slice(strings.indexOf("a"), strings.indexOf("a")+2);
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12), 1, 1221);
numbers.splice(numbers.indexOf(18), 1, 1881);
// - Replace words in strings array with the length of the word
strings.forEach((a,b) => strings.splice(b, 1, a.length));
// - Find the sum of the length of words using above question
strings.reduce((a,b) => a+b);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.filter((namewithJ) => namewithJ.firstname.startsWith("J"));
// - Create new array with only first name
let firstName = customers.map((firstnames) => firstnames.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullNames = customers.map((fullname) => `${fullname.firstname} ${fullname.lastname}`);
// - Sort the array created above alphabetically
fullNames.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
firstName.filter((vowels) => vowels.includes("a","e","i","o","u"));
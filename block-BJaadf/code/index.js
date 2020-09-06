let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.concat("Papaya");
// Remove the last element from fruits array
fruits.pop();
// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits
fruits.pop();
// Log the element on index 0 and 1
fruits.shift();
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index
fruits.shift();
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("Guava");
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift('Dragon Fruit');
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
(fruits.slice(0,1) == "Dragon Fruit" || fruits.slice(0,1) == "Guava") ? true : false;
// Update the value of index 1 to `Pears`
fruits.splice(1,0, "Pears");
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0, "Kiwi","Lemon");
// Remove (slice) all the element from index 5
fruits.pop();
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ['Berries', 'Melons'];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits.concat(moreFruits);
// Log the name of all fruit in console
for (fruitsname of fruits){
    console.log(fruitsname);
}
// Convert each fruit name to lowercase and log it
for (fruitsname of fruits){
    console.log(fruitsname.toLowerCase());
}
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = [];
for (fruitsname of fruits){
    lowercaseFruits.push(fruitsname.toLowerCase());
}
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = [];
for (fruitsname of fruits){
    uppercaseFruits.push(fruitsname.toUpperCase());
}

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat());
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
console.log(numbersTwo.flat(2));
// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
let newnumbersThree = numbersThree.flat(Infinity);
console.log(newnumbersThree);
// Use forEach to log all the elements of numberThree array
newnumbersThree.forEach((lognumberThree) => console.log(lognumberThree));
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = numbersThree.flat(Infinity).map((multipledBy2) => multipledBy2*2);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = numbersThree.flat(Infinity).map((multipledBy3) => multipledBy3*3);
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = numbersThree.flat(Infinity).map((dividedBy2) => dividedBy2/2);
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = numbersThree.flat(Infinity).filter((oddnum) => (oddnum %2 !== 0));
// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = numbersThree.flat(Infinity).filter((evennum) => (evennum %2 == 0));
// Find the index of 10 in numbersThree array
numbersThree.flat(Infinity).indexOf(10);
// Reverse the values of numbersThree array
numbersThree.flat(Infinity).reverse();
// Reverse the values of numbersTwo array
numbersTwo.flat(Infinity).reverse();
// Join all fruits with '-', convert to uppercase and log it
fruits.join("-");
// Join all fruits with '&', convert to lowercase and log it
fruits.join("&").toLowerCase();
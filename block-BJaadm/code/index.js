let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of Name key from persons array
let peopleName = persons.map((persons) => persons.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((persons) => persons.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((persons) => persons.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter((name) => name.startsWith("P") || name.startsWith("J")));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter((name) => name.startsWith("A") || name.startsWith("C")));
// Log all the filtered male ('M') in persons array
console.log(persons.filter((sexM) => sexM.sex == "M"));
// Log all the filtered female ('F') in persons array
console.log(persons.filter((sexF) => sexF.sex == "F"));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((Fnames) => Fnames.sex == "F" && Fnames.name.startsWith("C") || Fnames.name.startsWith("J")));
// Log all the even numbers from peopleGrade array
console.log(persons.filter(evenNum => evenNum.grade % 2 == 0));
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.filter(element => element.name.startsWith("J"))[0]);
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.filter(element => element.name.startsWith("P"))[0]);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.filter(element => element.name.startsWith("J") && element.grade > 10 && element.sex == "F"));
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(female => female.sex == "F");
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(male => male.sex == "M");
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((a,b) => a+b);
// Find the average grade
console.log(gradeTotal/peopleGrade.length);
// Find the average grade of male
let totalMale = persons.filter(males => males.sex == "M");
console.log(totalMale.length/persons.length);
// Find the average grade of female
let totalFemale = persons.filter(females => females.sex == "F");
console.log(totalFemale.length/persons.length);
// Find the highest grade
console.log(peopleGrade.sort((a,b) => b-a)[0]);
// Find the highest grade in male
console.log(totalMale.sort((a,b) => b-a)[0]);
// Find the highest grade in female
console.log(totalFemale.sort((a,b) => b-a)[0]);
// Find the highest grade for people whose name starts with 'J' or 'P'
console.log(persons.filter((element) => element.name.startsWith("P") || element.name.startsWith("J")).filter(filterGrade => filterGrade.grade).sort((a,b) => b-a)[0]);
// This can be seems to be more complex and can be refracted, but i want to just try branching to see wether it may work or not.

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b) => a-b);
console.log(peopleGrade); // yes the data is mutated
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b) => b-a);
console.log(peopleGrade); // yes the data is mutated
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b) => b-a));
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort());
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());
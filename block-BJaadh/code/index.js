// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

numbers.indexOf(101);

// - Find the last index of `9` in numbers

numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"

joinedStrings = strings.join(' ');
console.log(joinedStrings)

// - Add two new words in the strings array "called" and "sentance"

newStrings = [...strings]
newStrings.push(`called`, `sentence`)

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

console.log(newStrings.join(" "))



// - Remove the first word in the array (strings)

newStrings.shift(0)

console.log(newStrings)

// - Find all the words that contain 'is' use string method 'includes'

console.log(newStrings.includes(`is`))




// - Find all the words that contain 'is' use string method 'indexOf'

console.log(newStrings.indexOf(`is`));

// - Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every(element => console.log(element % 3 === 0 ? true: false))

// -  Sort Array from smallest to largest

sortedNumbers = [...numbers]

// compareFunction (a,b) {
//   return b - a > 0 ? a : b;
// }

sortedNumbers.sort((a,b) => a - b)

console.log(sortedNumbers)

// - Remove the last word in strings

newStrings.pop()
console.log(newStrings)

// - Find largest number in numbers

console.log(sortedNumbers[sortedNumbers.length - 1])




// - Find longest string in strings

let stringsLength = strings.map(function(value){
  return value.length 
})

console.log(strings[3])

// - Find all the even numbers

let evenNumbers = numbers.filter (value => value % 2 === 0)

console.log(evenNumbers)

// - Find all the odd numbers

let oddNumbers = numbers.filter (value => value % 2 !== 0)

console.log(oddNumbers)

// - Place a new word at the start of the array use (unshift)

newStrings.unshift("Sentence")

console.log(newStrings)

// - Make a subset of numbers array [18,9,7,11]

console.log(numbers.slice(3, 7))

// - Make a subset of strings array ['a','collection']

console.log(strings.slice(2, 4))

// - Replace 12 & 18 with 1221 and 1881

sortedNumbers.splice(sortedNumbers.indexOf(12), 1, 1221);


sortedNumbers.splice(sortedNumbers.indexOf(18), 1, 1881);

console.log(sortedNumbers)

// - Replace words in strings array with the length of the word


console.log(stringsLength)



// - Find the sum of the length of words using above question

let totalStringsLength = stringsLength.reduce(function(previousValue, currentValue){
  return previousValue += currentValue;
})

console.log(totalStringsLength )


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

let startswithJ = customers.filter (value => value.firstname.startsWith(`J`))

console.log(startswithJ)


// - Create new array with only first name

let firstName = customers.map (value => value.firstname)
console.log(firstName)

// - Create new array with all the full names (ex: "Joe Blogs")

let fullName = customers.map (value => value.firstname + ` ` + value.lastname)
console.log(fullName)


// - Sort the array created above alphabetically

let sortedFullName = fullName.sort((a , b) => a < b);
console.log(sortedFullName)

// - Create a new array that contains only user who has at least one vowel in the firstname.



let hasAVowel = customers.filter (function (value) {
if (value.firstname.includes(`a`)
|| value.firstname.includes(`e`)
|| value.firstname.includes(`i`)
|| value.firstname.includes(`o`)
|| value.firstname.includes(`u`)) {
  return value.firstname
}
})

console.log(hasAVowel)
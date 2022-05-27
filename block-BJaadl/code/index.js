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

function findLongestWord (array) {
  let sortedArray = [...array]
  sortedArray.sort((a,b) => b.length - a.length)
  return sortedArray[0]
}



// - Convert the above array "words" into an array of length of word instead of word.

function wordsToLength (value) {
  let final = [];
  return final = value.length;

}

let wordsLength = words.map(wordsToLength)

console.log(wordsLength)



// - Create a new array that only contains word with atleast one vowel.


function oneVowel(value){
  if (value.includes(`a`) || 
  value.includes(`e`) ||
  value.includes(`i`) || 
  value.includes(`o`) ||
   value.includes(`u`)) {
  return value
  }
}
let vowelWords = words.filter(oneVowel)

console.log(vowelWords)

// - Find the index of the word "rhythm"

console.log(words.indexOf(`rhythm`))

// - Create a new array that contians words not starting with vowel.

function noStartVowel(value){
  if (value.startsWith(`a`) || 
  value.startsWith(`e`) ||
  value.startsWith(`i`) || 
  value.startsWith(`o`) ||
   value.startsWith(`u`)) {
  
  } else {
    return value
  }
}

let noStartVowelWords = words.filter(noStartVowel)

console.log(noStartVowelWords)






// - Create a new array that contianse words not ending with vowel

function noEndVowel(value){
  if (value.endsWith(`a`) || 
  value.endsWith(`e`) ||
  value.endsWith(`i`) || 
  value.endsWith(`o`) ||
   value.endsWith(`u`)) {
  
  } else {
    return value
  }
}

let noEndVowelWords = words.filter(noEndVowel)

console.log(noEndVowelWords)

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray (array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  } return sum
} 

console.log(sumArray(numbers))

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let newArray = [6, 9, 12, 15, 18, 21, 24, 27, 30]


// - Create a new array that contains only even numbers

let evenArray = newArray.filter(value => value % 2 == 0)

// - Create  a new array that contains only odd numbers.

let oddArray = newArray.filter(value => value % 2 !== 0)

// - Create a new array that should have true for even number and false for odd numbers.

let evenOrOddArray = newArray.map(function(value) {
  return Boolean(value % 2 == 0)
})

// - Sort the above number in assending order.

let ascNumbers = [...numbers].sort((a,b) => a - b)

// - Does sort mutate the original array?

//yes thats why I used a clone

// - Find the sum of the numbers in the array.

console.log(sumArray(ascNumbers))

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers\

function averageNumbers (array) {
  let sum = 0;
  for (let value of array) {
     sum += value
  } return (sum/2)
}

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

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(array) {
  let totalLength = 0;
  for (let element of array) {
    totalLength += element.length
  } return totalLength/2
}
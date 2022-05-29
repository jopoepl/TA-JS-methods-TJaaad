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

// NOTE: Use reduce method whereever you can to solve this exercise:



// Find the average grade

let personsGrade = persons.map((value) => value.grade)

console.log(personsGrade)

const initialValue = 0;

avgPersonsGrade = personsGrade.reduce((previousValue, currentValue) => previousValue + currentValue) / personsGrade.length

console.log(avgPersonsGrade); // 11.08




// Find the average grade of male
let males = persons.filter(value => value.sex === `M`)
console.log(males)
let maleGrade = males.map(function(value){
 return value.grade
})

console.log(maleGrade)

function avgGrade (arr) {
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue) / arr.length
}

console.log(avgGrade(maleGrade))



// Find the average grade of female

let females = persons.filter(value => value.sex === `F`)
let femaleGrade = females.map(value => value.grade)
console.log(avgGrade(femaleGrade))


// Find the highest grade

let sortedPersonsGrade = personsGrade.sort((a,b) => b - a)

console.log(sortedPersonsGrade[0])



// Find the highest grade in male

let sortedMaleGrade = maleGrade.sort((a,b) => b - a)

console.log(sortedMaleGrade[0])

// Find the highest grade in female

let sortedFemaleGrade = femaleGrade.sort((a,b) => b - a)

console.log(sortedFemaleGrade[0])

// Find the highest grade for people whose name starts with 'J' or 'P'

const fruitBasket = [
  'banana', 
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/


let fruitBasketObj = fruitBasket.reduce((acc, cv) => {
  if(acc[cv]){
    acc[cv] = acc[cv] + 1
  } else {
    acc[cv] = 1;
  }


  return acc;
}, {})

console.log(fruitBasketObj)

/*

1 - acc[banana] = 1
2 - acc[cherry] = 1
3 - acc[orange] = 1
4 - acc[apple] = 1
5 - acc[cherry] = 2

*/

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/


let fruitBasketKeys = Object.keys(fruitBasketObj)

let fruitBasketValues = Object.values(fruitBasketObj)

let fruitBasketArr = fruitBasketKeys.map((value, i) => {
  let arr = []
  arr.push(value, fruitBasketValues[i])
  return arr

})

console.log(fruitBasketArr)



const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// 

console.log(data.flat())


const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

dataTwoFlat = dataTwo.reduce((acc, cv) => {
  acc = acc.concat(cv.flat())
  return acc
}, [])

console.log(dataTwoFlat)


/*
1 - [1,2,3] -> acc = [1,2,3]
2 - [4,5,6] -> acc = [1,2,3, 4,5,6]


*/

// dataTwo.flat(Infinity)


// Using reduce flat dataTwo array

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function increment (value) {
  return value + 1
}

function double (value) {
  return value * 2 
}

function decrement (value) {
  return value - 1
}

function triple (value) {
  return value * 3
}

function half (value) {
  return Math.round(value/2)
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

pipeline.reduce((acc, cv) => {
  acc = cv(acc);
  return acc
}, 3)



/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

pipeline2.reduce((acc, cv) => {
  acc = cv(acc);
  return acc
}, 8)

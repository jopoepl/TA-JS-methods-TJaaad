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

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map(function(value) {
  return value.name;
})

console.log(peopleName)

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map(function(value) {
  return value.grade;
})

console.log(peopleGrade)


// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map(function(value) {
  return value.sex;
})

console.log(peopleSex)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(peopleName.filter(value => value.startsWith(`J` || `P`) || value.startsWith(`P`)))

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let peopleNameAC = peopleName.filter(value => value.startsWith(`A`) || value.startsWith(`C`));

console.log(peopleNameAC.length)





// Log all the filtered male ('M') in persons array

let peopleM = persons.filter(value => value.sex === `M`)

peopleM.forEach(value => console.log(value))

// Log all the filtered female ('F') in persons array

let peopleF = persons.filter(value => value.sex === `F`)

peopleF.forEach(value => console.log(value))

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let peopleFCJ = peopleF.filter(value => value.name.startsWith(`C`) || value.name.startsWith(`J`))

peopleFCJ.forEach(value => console.log(value))



// Log all the even numbers from peopleGrade array

let peopleevenGrade = peopleGrade.filter(value => value % 2 ==0)

peopleevenGrade.forEach(value => console.log(value))

// Find the first name that starts with 'J' in persons array and log the object

persons.findIndex(value => value.name.startsWith(`J`))

console.log(persons[0])

// Find the first name that starts with 'P' in persons array and log the object

persons.findIndex(value => value.name.startsWith(`P`))

console.log(persons[5])

// Find the first name that starts with 'J', grade is greater than 10 and is a female

persons.findIndex(value => value.name.startsWith(`J`) && value.grade > 10 && value.sex === `F`)

console.log(persons[7])

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter(value => value.sex === `F`)

console.log(femalePersons)

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter(value => value.sex === `M`)

console.log(malePersons)

// Find the sum of all grades and store in gradeTotal

console.log(peopleGrade.reduce((acc, value) => acc += value))

// Find the average grade
console.log((peopleGrade.reduce((acc, value) => acc += value))/peopleGrade.length)


// Find the average grade of male

let peopleMGrade = peopleM.map(value => value.grade)

console.log(peopleMGrade.reduce((acc,value) => acc += value)/peopleMGrade.length)


// Find the average grade of female

let peopleFGrade = peopleF.map(value => value.grade)

console.log(peopleFGrade.reduce((acc,value) => acc += value)/peopleFGrade.length)

// Find the highest grade

peopleGrade.sort((a,b) => b - a)

console.log(peopleGrade[0])
// Find the highest grade in male

peopleMGrade.sort((a,b) => b - a) 

console.log(peopleMGrade[0])

// Find the highest grade in female

peopleFGrade.sort((a,b) => b - a) 

console.log(peopleFGrade[0])

// Find the highest grade for people whose name starts with 'J' or 'P'

let peopleNameJP = persons.filter(value => value.name.startsWith(`J`) || value.name.startsWith(`P`))

peopleNameJP.sort((a,b) => b.grade - a.grade)

console.log(peopleNameJP[0])

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

peopleGrade.sort((a,b) => a - b)

console.log(peopleGrade)


// Sort the peopleGrade in descending order

peopleGrade.sort((a,b) => b - a)

console.log(peopleGrade)

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let peopleGradeDesc = [...peopleGrade].sort((a,b) => b - a)

console.log(peopleGradeDesc)

// Sort the array peopelName in ascending `ABCD..Za....z`

peopleName.sort()

console.log(peopleName)

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

let peopleNameAlphabetical = [...peopleName].sort()

console.log(peopleNameAlphabetical)
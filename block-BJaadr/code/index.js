// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {
  let allCount = got.houses.reduce((totalCount, house) => {
    totalCount = totalCount + house.people.length;
    return totalCount
  }, 0)
  return allCount
}





function peopleByHouses() {
  let peopleHouses = got.houses.reduce((peopleObj, house) => {
    peopleObj[house.name] = house.people.length;
    return peopleObj 
  }, {})
  return peopleHouses;
}

function everyone() {
  let peopleNames = got.houses.reduce((allPeople, house) => {
    allPeople = allPeople.concat(house.people.map((person) => {
      return person.name
    }))
    return allPeople
  }, [])
  return peopleNames
}


function nameWithS() {
  let peopleNameS = everyone().reduce((peopleS, people) => {
    if (people.toLowerCase().includes(`s`)){
      peopleS = peopleS.concat(people)
    } return peopleS
  }, [])
  return peopleNameS
  }
  

function nameWithA() {
  let peopleNameS = everyone().reduce((peopleS, people) => {
    if (people.toLowerCase().includes(`a`)){
      peopleS = peopleS.concat(people)
    } return peopleS
  }, [])
  return peopleNameS
  }

function surnameWithS() {
  let peopleSurnameS = everyone().reduce((peopleS, people) => {
    if (people.toLowerCase().split(` `)[1].startsWith(`s`)){
      peopleS = peopleS.concat(people)
    } return peopleS
  }, [])
  return peopleSurnameS
  }

function surnameWithA() {
  let peopleSurnameA = everyone().reduce((peopleA, people) => {
    if (people.toLowerCase().split(` `)[1].startsWith(`a`)){
      peopleA = peopleA.concat(people)
    } return peopleA
  }, [])
  return peopleSurnameA
  }


function peopleNameOfAllHouses() {
  let peopleHouses = got.houses.reduce((peopleObj, house) => {
    peopleObj[house.name] = house.people.map((person) => {
      return person.name
    })
    return peopleObj 
  }, {})
  return peopleHouses;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}

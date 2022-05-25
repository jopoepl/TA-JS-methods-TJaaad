Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

  - Parameter: seperator - optional - can be anything that separates the values of the array when concatenated 
   - Return: a single string consisting of by all values, separated by a separator - default is comma
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(` `); //`1 2 3`
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.join(); //A,quick,brown,fox,jumped,over,a,lazy'
     let colors = ['red', 'green', 'blue']; //
     colors.join(`+`); // 'red+green+blue'
     ```
   - `join` accepts n number of values and returns one string with all the values using the separator.  It does not change the original array.
   - No it does not mutate the original array


3. `flat`

   - Parameter: (depth - optional) - tells the method how deep the nested arrays should be flattened
   - Return: a single Array with nested elements flattend according to the depth of the depth parameter specified. 
   - Example:
     ```js
     let numbers = [1, 2, [3,5, [6,7,8]]];
     numbers.flat(4);//[1, 2, 3, 5, 6, 7, 8]
     let colors = ['red', [`dark green`, `aqua`, `light green`, [`green blue`, `red blue`], 'blue']];
     colors.flat(Infinity); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `flat` accepts an optional depth value(default being 1) and flattens the nested arrays into a single array. It does not mutate the original array.



4. `push`

  - Parameter: (element0, elemt1, ...elementN) - strings or numbers
   - Return: a single string with a new length and elements specified in the parameter added at the end of the array. 
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.push(4); //4 - numbers =[1, 2, 3, 4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.push(` dog`); // ['A', 'quick', 'brown', 'fox', 'jumped', 'over', 'a', 'lazy', ' dog']
     let colors = ['red', 'green', 'blue']; //
     colors.push(`end`); // ['red', 'green', 'blue', 'end']
     ```
   - `push` accepts n number of elements and adds those elements to the end fo the array. 
   - It does  mutate the original array.


5. `indexOf`

  - Parameter: (searchElement, startIndex) can be number or string or any other value
   - Return: the indexvalue of the first match with the searchElement (starting from default value of 0 or any other specified startIndex) - if -ve startIndex is specified, it searches from end to start in reverse order. 
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.indexOf(3); //2
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.indexOf(` dog`); 
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.indexOf(`blue`, -1); // 2
     ```
   - `indexOf` returns the index value of the first match with the search Element, starting from the specified startIndex. 
   - It does not mutate the original array.

6. `lastIndexOf`

  - Parameter: (searchElement, fromIndex) can be number or string or any other value
   - Return:  Returns the last index at which a given element can be found in the array. Starts backwards. 
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.lastIndexOf(3); //2
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.lastIndexOf(` dog`); 
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.lastIndexOf(`blue`, -2); // 0
     ```
   - `indexOf` returns the index value of the last match with the search Element, starting from the specified fromIndex. 
   - It does not mutate the original array.



7. `includes`

  - Parameter: (searchElement, fromIndex) can be string or number or any other value
   - Return:  Returns true or false depending upon if the searchString is present in the array 
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(3); //true
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.includes(` dog`); //false
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.includes(`red`, 2); // false
     colors.includes(`red`); //true
     ```
   - `includes` returns true or false after checking if the searchString is found in the array, starting from the specified fromIndex.
   It does not mutate the array. 


8. `reverse`

  - Parameter: ()
   - Return:  Returns the array in a reversed order, last to first. 
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.reverse(); // [3,2,1]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.reverse(); // ['lazy', 'a', 'over', 'jumped', 'fox', 'brown', 'quick', 'A']
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.reverse(); // ['blue', 'green', 'red', 'blue']
     ```
   - `reverse` returns the array in reverse, starting from last to first element. 
   It does mutate the array. 



9. `every`

  - Parameter: (cb, element, index, array, )
   - Return:  Returns true or false depending upon if all elements pass the specified function
   - Example:
     ```js
     let numbers = [1, 2, 3];
     let checkGreaterThan = (number) => number > 10;
     console.log(numbers.every(checkGreaterThan)); // False
     let colors = [`blue`, 'red', 'green', 'blue']; //
    let checkStringGreaterThan = (string) => string === `blue`;
     console.log (colors.every(checkStringGreaterThan)); // ['blue', 'green', 'red', 'blue']
     ```
   - `every` returns true or false based on if all the elements in the array pass the test implemented by the provided function
   It does not mutate the array. 

10. `shift`

  - Parameter: ()
   - Return:  Returns the removed element (undefined if empty)
   - Example:
     ```js
     let numbers = [1, 2, 3];
     console.log(numbers.shift()); // 1
     let colors = [`blue`, 'red', 'green', 'blue']; //
     console.log (colors.shift()); // blue
     ```
   - `shift` removes the first element from the array and returns that removed element
   It does mutate the array. 


11. `splice`

  - Parameter: (start, deleteCount, item1, item2, ...itemN)
   - Return: an array containing the deleted values
   - Example:
     ```js
     let numbers = [1, 2, 3];
  numbers.splice(1, 1, 10); // 2
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.splice(3,1, `yellow`); // blue
     ```
   - `splice` removes elements from the array starting from the start index and replaces it with the items specified. 
   It does mutate the array. 


12. `find`

  - Parameter: (function(element, index, array) 
   - Return: returns the first element in the provided array that satisfies the provided testing function.

   - Example:
     ```js
     let numbers = [1, 2, 3];
  numbers.find(element => element > 1 ); // 2
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.find(element => element === `red` ) // blue
     ```
   - `find` finds the first element that passes the callback function
   It does not mutate the array. 


13. `unshift`
  - Parameter: (element0, element1, /* ... ,*/ elementN)
   - Return:  Returns a new array with elements added at the start
   - Example:
     ```js
     let numbers = [1, 2, 3];
     console.log(numbers.unshift(0, 0.5)); // 5 - length of the new array
     console.log(numbers); //[0, 0.5, 1, 2, 3]
     let colors = [`blue`, 'red', 'green', 'blue']; //
     console.log (colors.unshift(`yellow`, `black`, `orange`)); // 7
     console.log(colors); //['yellow', 'black', 'orange', 'blue', 'red', 'green', 'blue']
undefined
     ```
   - `unshift` adds new elements at the start of the array and returns the new length of the array.
   It does mutate the array. 


14. `findIndex`

  - Parameter: (function(element, index, array) 
   - Return: returns the index value of the first element in the provided array that satisfies the provided testing function.

   - Example:
     ```js
     let numbers = [1, 2, 3];
  numbers.findIndex(element => element > 1 ); // 1
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.findIndex(element => element === `red` ) // 1
     ```
   - `findIndex` finds the index value of the first element in the provided array that satisfies the provided testing function.
   It does not mutate the array. 

15. `filter`

  - Parameter: (function(element, index, array) 
   - Return: returns creates a new array with all elements that passes the callback function

   - Example:
     ```js
     let numbers = [1, 2, 3];
  numbers.filter(element => element > 1 ); // [2,3]
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.filter(element => element === `blue` ) // [blue, blue]
     ```
   - `filter` creates a new array of all the elements that passes the callback function.
   It does not mutate the array. 



16. `flat`
done
17. `forEach`

  - Parameter: (function(element, index, array) 
  - Return: undefined
   - Example:
     ```js
     let numbers = [1, 2, 3];
  numbers.forEach(element => console.log(element > 1 )); // undefined
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.forEach(element => console.log(element === `blue`)) // indefined
     ```
   - `forEach` executes a provided function once for each array element - does not return anything
   It does not mutate the array. 



18. `map`


  - Parameter: (function(element, index, array) 
   - Return: returns a new array with all elements that passes the callback function

   - Example:
     ```js
     let numbers = [1, 2, 3];
  numbers.map(element => console.log(element > 1 )); // [2,3]
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.map(element => console.log(element === `blue`)) // [blue, blue]
     ```
   - `map`  executes a provided function once for each array element and returns a new array.
   It does not mutate the array. 

19. `pop`

  - Parameter: ()
   - Return: returns the last element that was removed

   - Example:
     ```js
     let numbers = [1, 2, 3];
  numbers.pop(); // [3]
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.pop() // [blue]
     ```
   - `pop` removes the last element from the array and returns the value.
   It does mutate the array. 


20. `reduce`

- Parameter: (function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
   - Return: returns a single value after executing the callback function for every element 

   - Example:
     ```js
     let numbers = [10, 20, 30, 40, 50];
     let initialValue = 0;
     let sum = numbers.reduce((previousValue, currentValue) => previousValue+currentValue, initialValue);
     console.log(sum); 
  numbers.pop(); // [3]
     let colors = [`blue`, 'red', 'green', 'blue'];
     colors.reduce(((previousValue, currentValue) => value = previousValue + currentValue ), "") //'blueredgreenblue'
     ```
   - `reduce` returns a single value after running the cb function through all element in an array.
   It does NOT mutate the array. 



21. `slice`

  - Parameter: (start, end)
   - Return: an array containing the elements starting from the specified start index but ending before the end index. (end not included)
   - Example:
     ```js
     let numbers = [1, 2, 3];
  numbers.slice(1, 2); // 2
     let colors = [`blue`, 'red', 'green', 'blue']; //
     colors.slice(3,1); // blue
     ```
   - `slice` creates a new array with the elements starting from the start index and ending before the end index. Negative end index would mean the position starts from the end (for the end index). 
   It does NOT mutate the array. 

22. `some`

  - Parameter: (cb, element, index, array, )
   - Return:  Returns true or false depending upon if all elements pass the specified function
   - Example:
     ```js
     let numbers = [1, 2, 3];
     let checkGreaterThan = (number) => number > 10;
     console.log(numbers.some(checkGreaterThan)); // False
     let colors = [`blue`, 'red', 'green', 'blue']; //
    let checkStringGreaterThan = (string) => string === `blue`;
     console.log (colors.some(checkStringGreaterThan)); // ['blue', 'green', 'red', 'blue']
     ```
   - `some` returns true or false based on if any of the elements in the array pass the test implemented by the provided function
   It does not mutate the array. 

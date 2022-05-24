Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Parameter:  - no parameter needed - (converts the value to string as default)
   - Return: new string value in uppercase (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); //`ARYA STARK`
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase(232); // parameter makes no difference - 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
     let houseName = 'Starks'; 
     houseName.toUpperCase(); // STARKS
     ```
   - `toUpperCase` accepts a string (converts non-string to string value) and return a new string in uppercase. 


3. `toLowerCase`
   - Parameter:  - no parameter needed - (converts the value to string as default)
   - Return: new string value in lowercase (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toLowerCase(); //`arya stark`
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toLowerCase(232); // parameter makes no difference - 'a quick brown fox jumped over a lazy dog'
     let houseName = 'Starks'; 
     houseName.toLowerCase(); // 'starks'
     ```
   - `toLowerCase` accepts a string (converts non-string to string value) and return a new string in lowercase. 

4. `trim`

   - Parameter:  - no parameter needed - (converts the value to string as default)
   - Return: new string value without any whitespace on both the start and the end (string data type)
   - Example:
     ```js
     let name = '   Arya Stark    ';
     name.trim(); //`arya stark`
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.trim(232); // no whitespace = return a copy of the string - 'A quick brown fox jumped over a lazy dog'
     let houseName = 'Starks'; 
     houseName.trim(); // 'Starks'
     ```
   - `trim()` accepts a string (converts non-string to string value) and return a new string without any whitespaces on the start or the end. 

5. `trimStart`

   - Parameter:  - no parameter needed - (converts the value to string as default)
   - Return: new string value without any whitespace at the start (string data type)
   - Example:
     ```js
     let name = '   Arya Stark    ';
     name.trimStart(); //`Arya Stark    `
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.trimStart(232); // no whitespace at the start = return a copy of the string - 'A quick brown fox jumped over a lazy dog'
     let houseName = 'Starks  '; 
     houseName.trimStart(); // 'Starks  '
     ```
   - `trimStart()` accepts a string (converts non-string to string value) and return a new string without any whitespaces at the start.

6. `trimEnd`

   - Parameter:  - no parameter needed - (converts the value to string as default)
   - Return: new string value without any whitespace at the end (string data type)
   - Example:
     ```js
     let name = '   Arya Stark    ';
     name.trimStart(); //`    Arya Stark`
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.trimStart(232); // no whitespace at the end = return a copy of the string - 'A quick brown fox jumped over a lazy dog'
     let houseName = 'Starks  '; 
     houseName.trimEnd(); // 'Starks'
     ```
   - `trimEnd()` accepts a string (converts non-string to string value) and return a new string without any whitespaces at the end.


7. `concat`

   - Parameter:  - strings to be concatenated - (also takes number but converts to string)
   - Return: new string value with all strings concatenated (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.concat(` `, `-`, houseName); // 'Arya Stark -Starks  '
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.concat(232); //- 'A quick brown fox jumped over a lazy dog232'
     let houseName = 'Starks'; 
     houseName.concat(name); // 'Starks  Arya Stark'
     ```
   - `concat()` accepts N number of strings (converts non-string to string value) and return a new string with the concatenation of all string arguments.

8. `endsWith`

   - Parameter:  - (searchString, length) - (string) / length is an optional parameter for specifying the length of the string (default str.length)
   - Return: true or false based on whether the string ends with the searchString value
   - Example:
     ```js
     let name = 'Arya Stark';
     name.endsWith(`ark`); // true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.endsWith(`dog`); //- true
     let houseName = 'Starks'; 
     houseName.endsWith(`ARK`); // false - this method like JS is case sensitive 
     ```
   - `endsWith()` accepts a search string and optional string length and returns true or false based on whether the string ends with the search string


9. `includes`

   - Parameter:  - (searchString, position) - searchstring will be a string and positio is optional with default of 0. If specified, this method will start the search from the position value. 
   - Return: true or false based on whether the searchstring is present in the string.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.includes(`ark`); // true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.includes(`lazy`, 10); //- true - search begins after index 10
     let houseName = 'Starks'; 
     houseName.includes(`ARK`); // false - this method like JS is case sensitive 
     ```
   - `includes()` accepts a search string and optional position value and returns true or false based on whether the search tring is present in the string.

10. `indexOf`

   - Parameter:  - (searchString, position) - position specifies the starting index position of the search
   - Return: index value of the searchString if found in the string from the beginning 
   - Example:
     ```js
     let name = 'Arya Stark';
     name.indexOf(`ark`); // 7
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.indexOf(`lazy`, 10); //- 32
     let houseName = 'Starks'; 
     houseName.indexOf(`ARK`); // -1 (default when searchstring is not found) - this method like JS is case sensitive 
     ```
   - `indexOf()` accepts a search string and optional position value and returns index value of the searchstring, if found in the string


11. `lastIndexOf`

   - Parameter:  - (searchString, position) - position specifies the starting index position of the search
   - Return: index value of the searchString if found in the string from the end 
   - Example:
     ```js
     let name = 'Arya Stark';
     name.lastIndexOf(`ark`); 7
     ame.lastIndexOf(`a`); // 7
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.lastIndexOf(`lazy`, 10);// -1 (i.e. not found) since it looks for the word from the index below the position value
    sentance.lastIndexOf(`lazy`, 35); //- 32
     let houseName = 'Starks'; 
     houseName.lastIndexOf(`ARK`); // -1 (default when searchstring is not found) - this method like JS is case sensitive 
     ```
   - `lastIndexOf()` accepts a search string and optional position value and returns index value of the last searchstring, if found in the string


12. `padEnd`

   - Parameter:  - (targetLength, padString) - padString is the string to be padded, targetLength is the total length of the resulting string (string value)
   - Return: A String of the specified targetLength with the padString applied at the end of the current str.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.padEnd(10, `ark`); //'Arya Stark' coz length specified is taken up by the original string
     name.padEnd(20, `ark`); //'Arya Starkarkarkarka'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padEnd(50, ` pochi`);//'A quick brown fox jumped over a lazy dog pochi poc'
     let houseName = 'Starks'; 
     houseName.padEnd(20, `This house is from the GoT series from HBO`)// only adds the padString up to the value of the total length specified, so it might not add it in full
     ```
   - `padEnd()` pads a string with the current string repeated according to the value specified in the targetLength of the entire string


13. `padStart`


   - Parameter:  - (targetLength, padString) - padString is the string to be padded at the start, targetLength is the total length of the resulting string (string value)
   - Return: A String of the specified targetLength with the padString applied at the start of the current str.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.padStart(10, `ark`); //'Arya Stark' no padString was added because original string length took up the target length
     name.padStart(20, `ark`); //'Arya Starkarkarkarka'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padStart(50, ` pochi`);//' pochi pocA quick brown fox jumped over a lazy dog'
     let houseName = 'Starks'; 
     houseName.padStart(20, `This house is from the GoT series from HBO`)// only adds the padString up to the value of the total length specified, so it might not add it in full
     ```
   - `padStart()` pads a string with the current string at the start repeated until the Length of the resulting string reaches Target length.


14. `repeat`


   - Parameter:  - (count) - (number value)
   - Return: Repeats the string the number of times specified in the count value
   - Example:
     ```js
     let name = 'Arya Stark';
     name.repeat(3) //'Arya StarkArya StarkArya Stark'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.repeat (); // no input == empty string
     let houseName = 'Starks'; 
     houseName.repeat(10) // `StarksStarksStarksStarksStarksStarksStarksStarksStarksStarks'
     ```
   - `repeat()` repeats the string count number of times.


15. `replace`

   - Parameter:  - (string to be replaced with, string to be replaced)
   - Return: New string with the first matched string replaced
     ```js
     let name = 'Arya Stark';
     name.replace(`a`, `o`) // replaceAll will replace all matched strings
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.replace (); // no input == same string
     let houseName = 'Starks'; 
     houseName.replace(`s` , `B`) // `StarkB`
     ```
   - `replace()` Replaces the first matched string with the new string


16. `slice`


   - Parameter:  - (beginIndex, endIndex) - number 
   - Return: New string extracted from the value specified in the parameters
     ```js
     let name = 'Arya Stark';
     name.slice(0, 4) // 'Arya`
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.slice (8, 25); //'brown fox jumped '
     let houseName = 'Starks'; 
     houseName.slice(10 , 0) // `` - since unlike substring, it cannot reverse the begin and end indices
     ```
   - `slice()` This method extracts a section of a string and returns it as a new string

17. `split`

   - Parameter:  - (separator, limit) - separator must be string or expressions
   - Return: New string extracted from the value specified in the parameters
     ```js
     let name = 'Arya Stark';
     name.split(``) // 'Arya`
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.split (`quick`); // splits the words on the left and right of quick into new array
     let houseName = 'Starks'; 
     houseName.split(``) // `` - since unlike substring, it cannot reverse the begin and end indices
     ```
   - `split()` This method divides a String into an ordered list of substrings and into an array.


18. `substring`



   - Parameter:  - (indexStart, indexEnd) - numbers
   - Return: New string extracted between the values specified in the parameters
     ```js
     let name = 'Arya Stark';
     name.substring(0, 4) // 'Arya`
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.substring (8, 25); //'brown fox jumped '
     let houseName = 'Starks'; 
     houseName.substring(10 , 0) // `Starks`substring can reverse the begin and end indices
     ```
   - `substring()` This method extracts a specified part of a string and returns it as a new string

//Javascript string methods


//Searching methods
console.log("Hello".search("e"));          //searches for a string and returns a position of a match
console.log("Hello".indexOf("l"));         //get the index of the first occurrence of a substring in a string.
console.log("Hello".lastIndexOf("l"));     //find the index of the last occurrence of a substring in a string.
console.log("Hello".includes("el"));       //searches for a string and returns a boolean value
console.log("Hello".startsWith("o"));      //check if a string starts with another string.
console.log("Hello".endsWith("o"));        //check if a string ends with another string.

//Trimming
console.log("   Hello   ".trim());         //remove whitespace characters from a string.
console.log("   Hello   ".trimStart());    // remove the leading whitespace characters of a string.
console.log("   Hello   ".trimEnd());      // remove the ending whitespace characters of a string.


//Extracting
console.log("Hello".split(""));             // split a string into an array of substrings.
console.log("Hello".substring(1, 4));       //returns a part of a string (here doesn't includes 4th index character 
console.log("Hello".slice(1, 3));           //extract a part of a string.


//Replacing
console.log("Hello".replace("llo", "y"));    //replace a substring in a string with a new one.
console.log("Hello".replaceAll("l", "y"));   //replace all occurrences of a substring that matches a pattern with a new one.


//Padding  - pad a string with another string until the result string reaches the given length.
console.log("Hello".padStart(8, "a"))
console.log("Hello".padEnd(8, "a"))


console.log("Hello".charAt(4));    //returns the character at the specified index
console.log("Hello".concat("", "World"));   //joins two or more strings
console.log("Hello".toLowerCase());
console.log("Hello".toUpperCase());
console.log("Hello".length);               //returns the length of a string.
console.log("Hello".match(/[A-Z]/g));      //matches a string against a regular expression **, returns an array of matches,  returns null if no match is found.
// Javascript array methods to find elements:

//indexOf() – locate an element in an array.
//syntax: Array.indexOf(searchElement, fromIndex)

let scores = [10, 20, 30, 40, 50, 60];
console.log(scores.indexOf(10))
console.log(scores.indexOf(30))
console.log(scores.indexOf(50))
console.log(scores.indexOf(50, 3))
console.log(scores.indexOf(60))
console.log(scores.indexOf(20, -1));    // 5 (fromIndex = 6+ (-1) = 5)
console.log(scores.indexOf(20, -5));    // 1 (fromIndex = 6+ (-5) = 1)

var guests = [
    { name: 'John Doe', age: 30 },
    { name: 'Lily Bush', age: 20 },
    { name: 'William Gate', age: 25 }
];
console.log(guests.indexOf({ name: 'John Doe', age: 30 })); //-1 

//The lastIndexOf() method returns the index of the last occurrence of the searchElement in the array. .It returns -1 if it cannot find the element.
//syntax: Array.lastIndexOf(searchElement, [fromIndex = Array.length - 1])
var rupees = [10, 20, 30, 10, 40, 20];
console.log(rupees.lastIndexOf(10));// 3
console.log(rupees.lastIndexOf(20));// 5
console.log(rupees.lastIndexOf(50));// -1   (number 50 is not in the scores)
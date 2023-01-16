// Javascript array methods to find elements:

//includes() – check if an element is in an array.
// syntax:array.includes(element,fromIndex);

console.log([1, 5, 7, 9].includes(7));   //true
console.log([1, 5, 7, 9].includes(0));   //false
console.log([1, 5, 7, 9].includes(5, 2)); //false
[NaN].includes(NaN);  // true
[-0].includes(+0);    // true
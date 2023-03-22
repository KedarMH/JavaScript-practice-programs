//By converting number to a string

let result = 0;
let number = 123456789;

result = Number(String(number).split('').reverse().join(''));
console.log(result);

//using arrow function
const reverseNumber = number => parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)
console.log(reverseNumber(number));

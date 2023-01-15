// Program to check if the Numbers Have Same Last Digit

//input
const a = parseInt(prompt('Enter first number: '))
const b = parseInt(prompt('Enter second number: '))
const c = parseInt(prompt('Enter third number: '))

//to find last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

//compare last digits
if (result1 == result2 && result1 == result3) {
    console.log(`${a},${b} and ${c} have same last digit`)
}
else {
    console.log(`${a},${b} and ${c} have different last digit`)
}
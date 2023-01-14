// using if...else if...else statement

const num = parseInt(prompt("Enter a number:"));
// const num = 5;
if (num > 0) {
    console.log(`${num} is a Positive number`)
} else if (num == 0) {
    console.log(`${num} is Zero `)
} else {
    console.log(`${num} is a Negative number`);
}

// using nested if...else statement

const number = parseInt(prompt("Enter a number:"));
if (number >= 0) {
    if (number == 0) {
        console.log("number is zero")
    } else {
        console.log("Positive number");
    }
}
else {
    console.log('negative number')
}
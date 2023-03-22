// find factorial 

const number = 5;

function factorial(number) {
    if (number < 0) {
        console.log(`Factorial doesn't exist for negative number.`)
    }
    else if (number === 0) {
        console.log(`Factorial of a ${number} is 1`);
    }
    else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        console.log(`Factorial of ${number} is ${fact}`);
    }

}

factorial(number);



//  Simple calculator program

let result;
// operator input
const operator = prompt('Enter operator (+,-,* or /):');

//operands input
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

//switch statement
switch (operator) {
    case '+':
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case '-':
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case '*':
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    case '/':
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;
    default:
        console.log('Invalid Operator');
        break;

}
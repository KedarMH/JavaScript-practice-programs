// program to reverse a string

//using for loop
const string = "Javascript";

function reverseString(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
console.log(reverseString(string))

//The for loop is used to iterate over the strings. During the first iteration, str.length - 1 gives the position of the last element. That element is added to the newString variable.
//This process continues for all the string elements.
/* Refer the below link for code visualization
https://pythontutor.com/visualize.html#code=//%20program%20to%20reverse%20a%20string%0A//%20take%20input%20from%20the%20user%0Aconst%20string%20%3D%20%22Hello%22%3B%0Afunction%20reverseString%28str%29%20%7B%0A%0A%20%20%20%20//%20empty%20string%0A%20%20%20%20let%20newString%20%3D%20%22%22%3B%0A%20%20%20%20for%20%28let%20i%20%3D%20str.length%20-%201%3B%20i%20%3E%3D%200%3B%20i--%29%20%7B%0A%20%20%20%20%20%20%20%20newString%20%2B%3D%20str%5Bi%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20newString%3B%0A%7D%0A%0A%0Aconsole.log%28reverseString%28string%29%29%3B&cumulative=false&curInstr=23&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
*/


//using built-in methods

const str = "Javascript"
function reverseStr(str) {
    // let newStr = "";
    const arrayofString = str.split("")
    const reverseArray = arrayofString.reverse();
    const joinArray = reverseArray.join("")

    return joinArray;
}
console.log(reverseStr(str));
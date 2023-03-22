//Program to Convert Date to Number

//create date
const date = new Date()           // The new Date() constructor is used to create a date object. It gives the current date and time.
console.log(date);

//converting to number
const result = date.getTime();        //The getTime() method returns the number of milliseconds from midnight of January 1, 1970 (EcmaScript epoch) to the specified date.
console.log(result);

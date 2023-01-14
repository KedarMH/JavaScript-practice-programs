// Javascript Program to Display Current Date

//get local machine date
const date = new Date()         //The new Date() gives the current date and time.
console.log(date);

//get current date as a string
const n = date.toDateString()      //The toDateString() method returns the date portion of a date object.
console.log('Date: ' + n);

//get current time as a string
const time = date.toLocaleTimeString();     //The toLocaleTimeString() method returns the time portion of a date object.
console.log('Time: ' + time);
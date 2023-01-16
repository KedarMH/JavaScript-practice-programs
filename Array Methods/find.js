// Javascript array methods to find elements:

//The find() method returns the first element in an array that passes a test function. 
//syntax: find(callback(element[, index[, array]])[, thisArg])

//The find() executes the callback function for each element in the array until the callback returns a truthy value. 
//If the callback returns a truthy value, the find() immediately returns the element and stops searching. Otherwise, it returns undefined.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(numbers.find(e => e % 2 == 0))  //2
console.log(numbers.find(e => e / 3 == 2));    //6

let mobiles = [{
    model: 'oneplus',
    price: 25000
},
{
    model: 'redmi',
    price: 20000
},
{
    model: 'iphone',
    price: 70000
}]
console.log(mobiles.find(c => c.price > 50000))
console.log(mobiles.find(c => c.price > 20000 && c.price < 60000))


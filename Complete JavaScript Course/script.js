let friend = {
  name: 'Derek',
  age: 28,
  married: true,
  likes: [
    'futsal',
    'coding',
    'his wife'
  ]
}

console.log('Linked!')
console.table({ a: 1, b: 2 })
console.table(friend)
console.error('Mainframe error!')
console.warn('Just an warning, continue')
console.time('Time')
//
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
//
console.timeEnd('Time') //output = Time: 0.8549...ms

const obj2 = {
  name: 'Test',
  make: 'subara'
}

obj2.year = 1965;
console.log(obj2) //works fine

//obj2 = 'string'; //Throws an error

// Primitive Data Types: 
//stored directly in the location the variable accesses, 
//stored on the stack
/*
String
Number
Boolean
Null
Undefined
Symbols
*/
// Reference Data Types: 
//Accesed by reference, 
//Objects that are stored on the heap, 
//a pointer to a location in memory
/*
Arrays
Object Literals
Functions
Dates
Anything Else...
*/

// TYPE CONVERSION
let value;
//number to string
// String()
value = String(45)// '45', length = 2
value = String(4 + 4) // 8, length = 1
value = String(true) //'true', length = 4
value = String(new Date()) // 'Thu Dec 20 2018 10:24:50 GMT-0700 (Mountain Standard Time)', length = 58
// .toString()
value = (65).toString()
value = (true).toString()


//string to number
value = Number('45')//45, 45.00
value = Number(true)//1, 1.00
value = Number(false)//0, 0.00
value = Number(null)// 0, 0.00
value = Number('test')//Nan
value = Number([1, 2, 3])//Nan
value = Number({ a: 1, b: 2 })//Nan

value = parseInt(1.3)//1, 1.00 because we used parseInt it drops the decimal value
value = parseFloat(1.3)//1.3, 1.30 because we used parseFloat it keeps the decimal value


console.log(value)
console.log(value.toFixed(2))

// TYPE Coercion
const val1 = '1';
const val2 = 2;
const sum = val1 + val2
console.log(sum)// outputs: 12 because it concatinates the 1 and 2 to make '12'
console.log(typeof sum)//string

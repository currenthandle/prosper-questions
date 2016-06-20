/*
String manipulation
A. Reverse a string
B. atoi() ­ convert a string to an integer
C. printf() ­ convert an integer to a string
*/

// Reverse a string
var ourString = 'this is the string we want to reverse'
var reversedString = ourString.split('').reverse().join('')
console.log('Reverse a string')
console.log(reversedString)

// Convert a string to an integer
var stringInteger = "512"
var number = parseInt(stringInteger)
console.log('Convert a string to an integer')
console.log(number)
console.log(typeof number)

// Convert an integer to a string
var integer = 377
var stringNumber = integer.toString()
console.log('Convert an integer to a string')
console.log(stringNumber)
console.log(typeof stringNumber)

// Convert hex string to an integer
var hexString = '7a' 
var convertedInteger = parseInt(hexString, 16)
console.log('Convert hex string to an integer')
console.log(convertedInteger)
console.log(typeof convertedInteger)

// Convert integer to a hex string
var integerToBeHexed = 722
var hexedInteger = integerToBeHexed.toString(16)
console.log('Convert integer to a hex string')
console.log(hexedInteger)
console.log(typeof hexedInteger)


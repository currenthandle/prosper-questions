/*
Binary Search: ​Given an array of sorted integers and an integer, write a function that 
returns true if and only if the integer argument exists in the array.
a. Iteratively
b. Recursively
c. with log(n) runtime
*/

var list = [-4,-2,-1,0,2,4,6,8,12,33,38,52]
console.log('list', list)
console.log('-2', binarySearch(list, -2))
console.log('0', binarySearch(list, 0))
console.log('6', binarySearch(list, 6))
console.log('15', binarySearch(list, 15))

function binarySearch(list, query) {
	return (function innerBinary(min, max){
		var guess = Math.round((min + max)/2)
		if(list[guess] === query)  return true 
		if(guess === max) return (list[min] === query)
		if(list[guess] < query) return innerBinary(guess+1, max) 
		if(list[guess] > query) return innerBinary(min, guess-1) 
	})(0, list.length-1)
}



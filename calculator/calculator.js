function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	let result = arr.reduce(function(total, current) {
		return total += current;
	}, 0);
	return result;
}

function multiply (arr) {
	let result = arr.reduce(function(total, current) {
		return total *= current;
	}, 1);
	return result;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(x) {
	let arr = [];
	//convert x and its descendants into an array, all the way til 1
	for (let i = 1; i <= x; i++) {
		arr.push(i);
	}
	//using the reduce function on the array
	let result = arr.reduce(function(total, current) {
		return total *= current;
	}, 1);
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
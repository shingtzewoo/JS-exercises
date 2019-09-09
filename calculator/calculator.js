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

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
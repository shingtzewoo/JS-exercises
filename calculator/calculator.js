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
	let result = 1;
	let counter = 1;
	if (x === 0 || x === 1) {
		return result;
	} else {
		while (counter < x) {
			result *= (x*counter)
			counter++;
		}
	}
	return result;
}

function factorial(x) {
	let arr = [];
	for (let i = 1; i <= x; i++) {
		arr.push(i);
	}
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
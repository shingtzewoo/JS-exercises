const sumAll = function(integer1, integer2) {
    let sum = 0;
    let number1 = integer1;
    let number2 = integer2;
    if (number1 < 0 || number2 < 0 || typeof number1 !== "number" || typeof number2 !== "number") {
        return "ERROR";
    } else if (number1 < number2) {
        let i = number1;
        while (i <= number2) {
            sum += i;
            i++;
        }
    } else if (number1 > number2) {
        let i = number2;
        while (i <= number1) {
            sum += i;
            i++;
        }
    }
    return sum;
}

module.exports = sumAll

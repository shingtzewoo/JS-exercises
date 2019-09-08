const reverseString = function(word) {
    let newArr = [];
    let arr = word.split("");
    let measure = word.split("");
    for(let i = 0; i < measure.length; i++) {
        newArr[i] = arr.pop();
    }
    let newWord = newArr.join("");
    return newWord;
}

module.exports = reverseString

const repeatString = function(word, number) {
    let i = 0;
    let combined = "";
    while (i < number) {
       combined += word;
       i++;
    }
    let answer = (number < 0) ? "ERROR" : combined;
    return answer;
}

module.exports = repeatString

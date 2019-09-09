let palindromes = function(stringg) {
    let arr = stringg.toLowerCase().split('');
    let filteredarr = arr.filter((value) => value.match(/^[a-zA-Z]/));
    let arr4reversal = filteredarr.map((value) => value); //used as the value to reverse because we don't want the filteredarr to be reversed
    let reversedarr = arr4reversal.reverse();

    //joining the arrays into strings for comparison
    let reversedString = reversedarr.join('');
    let originalString = filteredarr.join('');

    //comparsion
    return reversedString === originalString ? true : false;
}

module.exports = palindromes

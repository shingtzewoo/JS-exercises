const caesar = function(word, shift) {
    let lower = /^[a-z]+$/;
    let upper = /^[A-Z]+$/;
    let lowermin = 97;
    let uppermin = 65;
    let uppermax = 90;
    let lowermax = 122;
    let arr = word.split('');
    (shift > 26 || shift < -26) ? shift %= 26 : shift;
    let arrCode = arr
                  .map(function(letter) { 
                    if (letter.match(upper)) {
                        if (letter.charCodeAt(0) !== 32 && letter.charCodeAt(0) !== 33 && letter.charCodeAt(0) !== 44 && letter.charCodeAt(0) !== 46 
                            && letter.charCodeAt(0) + shift <= uppermax && letter.charCodeAt(0) + shift >= uppermin) {
                            return letter.charCodeAt(0) + shift;
                        } else if (letter.charCodeAt(0) + shift > uppermax) {
                            return letter.charCodeAt(0) + shift - 26;
                        } else if (letter.charCodeAt(0) + shift < uppermin) {
                            return letter.charCodeAt(0) + shift + 26;
                        }
                    } else if (letter.match(lower)) { 
                        if (letter.charCodeAt(0) !== 32 && letter.charCodeAt(0) !== 33 && letter.charCodeAt(0) !== 44 && letter.charCodeAt(0) !== 46 
                            && letter.charCodeAt(0) + shift <= lowermax && letter.charCodeAt(0) + shift >= lowermin) {
                            return letter.charCodeAt(0) + shift; 
                        } else if (letter.charCodeAt(0) + shift > lowermax) {
                            return letter.charCodeAt(0) + shift - 26;
                        } else if (letter.charCodeAt(0) + shift < lowermin) {
                            return letter.charCodeAt(0) + shift + 26;
                        }
                    } else {
                        return letter;
                    }
                })
                .map((code) => typeof(code) == 'number' ? String.fromCharCode(code) : code);
    let result = arrCode.join('');
    return result;
}

module.exports = caesar

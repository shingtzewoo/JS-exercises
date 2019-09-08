const removeFromArray = function(arguments, ...remove) {
    let arr = Array.from(arguments);
    let arr2 = Array.from(remove);
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr2[i]) {
                arr.splice(j, 1);
            } else {
                continue;
            }
        }
    }
    return arr;
}

module.exports = removeFromArray

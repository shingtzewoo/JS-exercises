const fibonacci = function(member) {
    let a = 1;
    let b = 1;
    let arr = [];
    (typeof(member) == 'string') ? member = parseInt(member, 10) : member;
    if (member <= 0) {
        return "OOPS"
    }
    for (let count = 1; count <= member;) {
        arr[count] = a;
        count++;
        arr[count] = b;
        count++;
        a = a + b;
        b = b + a;
    }
    return arr[member];
}

module.exports = fibonacci

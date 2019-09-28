let findTheOldest = function(people) {
    let d = new Date();
    let result = people
        .sort(function(a, b) {
            if (!a.yearOfDeath) {
                a.yearOfDeath = d.getFullYear();
            }
            if (!b.yearOfDeath) {
                b.yearOfDeath = d.getFullYear();
            }
            const first = a.yearOfDeath - a.yearOfBirth;
            const next = b.yearOfDeath - b.yearOfBirth;
            return first > next ? -1 : 1;
        })
    return result[0];
}
module.exports = findTheOldest

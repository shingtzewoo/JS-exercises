const getTheTitles = function(books) {
    let result = books.map((book) => book.title);
    return result;
}

module.exports = getTheTitles;

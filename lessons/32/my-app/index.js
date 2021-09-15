// import functions from your package
const _smartSearch  = require('lodash/uniq');

const mySearch = (array) => _smartSearch(array);

console.log(_smartSearch(['Smith', 'John'], 'John'));

module.exports = mySearch;
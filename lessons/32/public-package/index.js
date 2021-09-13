// :)
const smartSearch = (array, value) => array.includes(value);
const smartIndex = (str, char) => str.indexOf(char);
console.log(smartIndex('teachMeSkills', 'M'));
console.log(smartSearch([1,2,3,4], 2));
1
module.exports = {
    smartSearch,
    smartIndex,
}
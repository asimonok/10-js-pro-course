// :)
const smartSearch = (array, value) => array.includes(value);
const randomSearch = (array) => {
  var randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
};

module.exports = {
  smartSearch,
  randomSearch,
};

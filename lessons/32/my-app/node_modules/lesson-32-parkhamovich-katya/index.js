// :)
const smartSearch = (array, value) => array.includes(value);

const randomSearch = (min, max) => Math.random() * (max - min) + min;

module.exports = {
  smartSearch,
  randomSearch,
};

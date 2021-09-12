// :)
const smartSearch = (array, value) => array.includes(value);

const randomSearch = (array) => {
  if (array) {
    const ind = Math.round(Math.random() * (array.length - 1));

    return array[ind];
  }

  return null;
};

module.exports = {
  smartSearch,
  randomSearch,
};

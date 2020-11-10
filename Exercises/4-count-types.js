'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const elem of array) {
    const type = typeof elem;
    types[type] === undefined ?
      types[type] = 1 :
      types[type]++;
  }
  return types;
};

module.exports = { countTypesInArray };

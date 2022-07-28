const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, idade) {
  const target = data.species.filter(({ name }) => name === animal);
  return target[0].residents.every(({ age }) => age >= idade);
}

module.exports = getAnimalsOlderThan;

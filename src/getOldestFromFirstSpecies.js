const data = require('../data/zoo_data');

// A função recebe um parâmetro ID referente à pessoa colaboradora e a partir desse ID:

// A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;

// A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;

// A função deverá encontrar o animal mais velho daquela espécie;

// A função deverá retornar um array com as informações do animal mais velho daquela espécie.

function getOldestFromFirstSpecies(identify) {
  const employee = data.employees.find(({ id }) => id === identify);
  const firstSpecieId = employee.responsibleFor[0];
  const animalSpecie = data.species.filter(({ id }) => id === firstSpecieId);
  const oldest = animalSpecie[0].residents.sort((a, b) => b.age - a.age)[0];
  return [oldest.name, oldest.sex, oldest.age];
}
console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getOldestFromFirstSpecies;

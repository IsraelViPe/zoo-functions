const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// retornar um array contendo todos animais da espécie
// receber vários parâmetros
// caso não receba parâmetros retorna um array vazio

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter(({ id }) => ids.includes(id) === true);
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46'));
module.exports = getSpeciesByIds;

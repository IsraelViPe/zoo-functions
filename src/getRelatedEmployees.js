const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}
// Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.
// se não for gerernte throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.reduce((arr, { managers }, index, array) => {
    // console.log(index, array[index].firstName);
    if (managers.includes(managerId)) {
      arr.push(`${array[index].firstName} ${array[index].lastName} `);
    }
    return arr;
  }, []);
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };

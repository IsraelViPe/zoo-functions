const data = require('../data/zoo_data');

// A função, caso o objeto passado por parâmetro tenha a propriedade name, deverá retornar somente a pessoa correspondente;

// A função poderá receber como parâmetro um objeto com a propriedade name recebendo o segundo nome como valor;

// A função, caso o objeto passado por parâmetro tenha a propriedade id, deverá retornar somente a pessoa correspondente;

// A função, caso não receba parâmetros, deverá retornar uma lista com a cobertura de todas as pessoas colaboradoras;

// A função, caso não haja nenhuma pessoa com o name ou id especificados deverá lançar um error.
function getEspecies(identify) {
  const species = data.employees.find(({ id }) => id === identify).responsibleFor;
  return data.species.reduce((animals, { id }, index, array) => {
    const arrAnimal = animals;
    if (species.includes(id)) {
      arrAnimal.push(array[index].name);
    }
    return arrAnimal;
  }, []);
}
function getEspeciesLocation(identify) {
  const species = data.employees.find(({ id }) => id === identify).responsibleFor;
  return data.species.reduce((location, { id }, index, array) => {
    const arrLocation = location;
    if (species.includes(id)) {
      arrLocation.push(array[index].location);
    }
    return arrLocation;
  }, []);
}

function getSingleEmploy(...obj) {
  const employeeData = data.employees.find((element) =>
    Object.values(element).includes(Object.values(Object.values(obj)[0])[0]));
  return {
    id: employeeData.id,
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    species: getEspecies(employeeData.id),
    locations: getEspeciesLocation(employeeData.id),
  };
}
function allEmployess() {
  return data.employees.reduce((arrEmployee, { id }) => {
    const employeeList = arrEmployee;
    employeeList.push(getSingleEmploy({ [id]: id }));

    return employeeList;
  }, []);
}

function getEmployeesCoverage(param) {
  const dataEmployees = data.employees.reduce((arr, { id, firstName, lastName }) => {
    const arrData = arr;
    arrData.push(id, firstName, lastName);
    return arrData;
  }, []);
  switch (true) {
  case (!param):
    return allEmployess();
  case dataEmployees.includes(Object.values(param)[0]):
    return getSingleEmploy(param);
  case !dataEmployees.includes(Object.values(param)[0]):
    throw new Error('Informações inválidas');
  default:
    return null;
  }
}

module.exports = getEmployeesCoverage;

console.log(typeof getEmployeesCoverage)

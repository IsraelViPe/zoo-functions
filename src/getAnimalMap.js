const data = require('../data/zoo_data');
// condição final !includesNames ai voce chama a getMapNoName
// desenvolvimento de getMapNoName
// retorno >>> um objeto de arrays
// input data.especies
// desenvolvimento >>>> duas ideias fazer um reduce
//  ou criar o objto antes com arrays vazios e depois tentar preenchelos com um map
function getAnimalMapNoName() {
  const mapZoo = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach(({ location }, index, array) => {
    if (location === 'NE') {
      mapZoo.NE.push(array[index].name);
    } else if (location === 'NW') {
      mapZoo.NW.push(array[index].name);
    } else if (location === 'SE') {
      mapZoo.SE.push(array[index].name);
    } else if (location === 'SW') {
      mapZoo.SW.push(array[index].name);
    }
  });
  return mapZoo;
}
// console.log(getAnimalMapNoName());

function getAnimalMapByName() {
  const mapZooByName = { NE: [], NW: [], SE: [], SW: [] };
  const { NE, NW, SE, SW } = getAnimalMapNoName();
  data.species.forEach(({ name }, index, array) => {
    if (NE.includes(name)) {
      mapZooByName.NE.push({ [name]: array[index].residents.map((element) => element.name) });
    } else if (NW.includes(name)) {
      mapZooByName.NW.push({ [name]: array[index].residents.map((element) => element.name) });
    } else if (SE.includes(name)) {
      mapZooByName.SE.push({ [name]: array[index].residents.map((element) => element.name) });
    } else if (SW.includes(name)) {
      mapZooByName.SW.push({ [name]: array[index].residents.map((element) => element.name) });
    }
  });
  return mapZooByName;
}

// console.log(JSON.stringify(getAnimalMapByName()));

function sortedNames(obj) {
  const { NE: [{ lions }, { giraffes }], NW: [{ tigers }, { bears }, { elephants }],
    SE: [{ penguins }, { otters }], SW: [{ frogs }, { snakes }] } = obj;
  lions.sort(); giraffes.sort(); tigers.sort(); bears.sort(); elephants.sort();
  penguins.sort(); otters.sort(); frogs.sort(); snakes.sort();
  return obj;
}
// console.log(JSON.stringify(sortedNames(getAnimalMapByName())));
function getSexGroup(name, sexo) {
  const result = [];
  data.species.forEach((element) => {
    if (element.name === name) {
      element.residents.reduce((arr, { sex }, index, array) => {
        if (sexo === sex) {
          result.push(array[index].name);
        }
        return result;
      }, '');
    }
  });
  return result;
}
// console.log(getSexGroup('lions', 'female'));

function getAnimalMapBySex(sex) {
  const mapZooBySex = { NE: [], NW: [], SE: [], SW: [] };
  const { NE, NW, SE, SW } = getAnimalMapNoName();
  data.species.forEach(({ name }) => {
    if (NE.includes(name)) {
      mapZooBySex.NE.push({ [name]: getSexGroup(name, sex) });
    } else if (NW.includes(name)) {
      mapZooBySex.NW.push({ [name]: getSexGroup(name, sex) });
    } else if (SE.includes(name)) {
      mapZooBySex.SE.push({ [name]: getSexGroup(name, sex) });
    } else if (SW.includes(name)) {
      mapZooBySex.SW.push({ [name]: getSexGroup(name, sex) });
    }
  });
  return mapZooBySex;
}
const verify = (param) => {
  if (!param || !param.includeNames) return true;
};

const verifyParam = (options) => {
  switch (true) {
  case (Object.keys(options).includes('sex') && Object.keys(options).includes('sorted')):
    return sortedNames(getAnimalMapBySex(options.sex));
  case (Object.keys(options).includes('sex')):
    return getAnimalMapBySex(options.sex);
  case (Object.keys(options).includes('sorted')):
    return sortedNames(getAnimalMapByName());
  default:
    return getAnimalMapByName();
  }
};

function getAnimalMap(options) {
  if (verify(options)) return getAnimalMapNoName();

  return verifyParam(options);
}
console.log(JSON.stringify(getAnimalMap({ includeNames: true })));
module.exports = getAnimalMap;

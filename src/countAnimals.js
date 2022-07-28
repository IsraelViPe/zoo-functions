const data = require('../data/zoo_data');
// Retorne a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor.
// esse primeiro eu preciso de um reduce no array species e no fim retornar o obj

// Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

// ao receber o argumento { specie: 'penguins' }, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

// pra resolver esse a primeira coisa é envolver o código num if/else if para validar
// se tem um ou dois paramêtros
// começo pela hipotese de 2 parâmetros

// se tem dois parametros eu preciso desistruturar o obj que é passado por parametro
// uso as chaves dele para fazer um filter do filter porque só preciso de um número no final
// filter do filter seria usar o valor da chave >>> specie (data.species.filter) para filtrar os objtos de interesse>>>
// o retorno será array >>> array[0].residents.filter >>>> (filtro a info sex) ai eu retorno o array.length

// ao passar o argumento { specie: 'giraffes', sex: 'female' }, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((total, { name }, index, array) => {
      const animalsObj = total;
      animalsObj[name] = array[index].residents.length;
      return animalsObj;
    }, {});
  }
  const { specie, sex: sexo } = animal;
  if (specie && sexo) {
    const totalPorSexo = data.species.filter(({ name }) => name === specie);
    return totalPorSexo[0].residents.filter(({ sex }) => sex === sexo).length;
  }
  if (specie) {
    const totalPorSpecie = data.species.filter(({ name }) => name === specie);
    return totalPorSpecie[0].residents.length;
  }
}

module.exports = countAnimals;

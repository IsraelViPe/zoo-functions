const data = require('../data/zoo_data');
// Retorne um array com os dias da semana em que um animal está disponível para visitação caso o parâmetro da função seja um animal. Por exemplo: [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
// basicamente se for passada a string 'lion' (valor da chave[name] dentro do obj dentro do array species), eu devo retornar o valor da chave[availability] ???? posso fazer uma function separada
// e depois chamala usando o swchit case ?
/// //////////////////////////////////////////////////////////////////////////////////////////////
// Retorne todos os horários disponíveis para cada dia da semana caso a função:

// - não receba parâmetro;===== retorna o objeto criado por inteiro ;

// -o parâmetro passado para a função seja qualquer coisa ==== retorna o objeto criado por inteiro;

// Para isso:

// Crie um objeto e adicione todos os dias da semana como chave;

// Os valores de cada dia da semana deve ser um objeto, possuindo as chaves officeHour e exhibition:

// officeHour deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;

// exhibition deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.

// A função, caso receba um único dia por parâmetro, deverá retornar os horários para aquele dia e quais animais estarão disponíveis. ???? eu basicamente estaria passando a chave[dia] do objCriado
// e recebo como respota o valor dessa chave >>> objCriado[dia]:resposta ///
// posso fazer um Object.Keys(objCriado).find((element) => element === param);

function animalAvailability(animal) {
  return ((data.species.find(({ name }) => animal === name)).availability);
}

function exhibition(day) {
  return data.species.reduce((animals, { availability }, index, array) => {
    if (availability.includes(day)) {
      animals.push(array[index].name);
    }
    return animals;
  }, []);
}

function openingHours(day) {
  return data.hours[day];
}

function allDays() {
  return Object.keys(data.hours).reduce((obj, curr) => {
    const expedienteObj = obj;
    if (curr === 'Monday') {
      expedienteObj[curr] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    } else {
      expedienteObj[curr] = {
        officeHour: `Open from ${openingHours(curr).open}am until ${openingHours(curr).close}pm`,
        exhibition: exhibition(curr) };
    }
    return expedienteObj;
  }, {});
}

function singleDay(day) {
  return Object.keys(data.hours).reduce((obj, curr) => {
    const expedienteObj = obj;
    if (day === 'Monday') {
      expedienteObj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    } else if (curr === day) {
      expedienteObj[curr] = {
        officeHour: `Open from ${openingHours(curr).open}am until ${openingHours(curr).close}pm`,
        exhibition: exhibition(curr) };
    }
    return expedienteObj;
  }, {});
}

function getSchedule(scheduleTarget) {
  const animalParam = data.species.some(({ name }) => scheduleTarget === name);
  if (!scheduleTarget) return allDays();
  if (animalParam) {
    return animalAvailability(scheduleTarget);
  }
  if (Object.keys(allDays()).includes(scheduleTarget)) {
    return singleDay(scheduleTarget);
  }
  return allDays();
}
console.log(getSchedule('M'));
module.exports = getSchedule;

const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const countChild = entrants.filter(({ age }) => age < 18).length;
  const countAdult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const countSenior = entrants.filter(({ age }) => age >= 50).length;
  const totalEntrants = {
    child: countChild,
    adult: countAdult,
    senior: countSenior,
  };
  return totalEntrants;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const { child: childPrice, adult: adultPrice, senior: seniorPrice} = data.prices;
  const totalPrice = (child * childPrice) + (adult * adultPrice) + (senior * seniorPrice);

  return totalPrice;



  // return Object.values(data.prices).reduce((total, curr, index, [adult$, senior$, child$]) => {
  //   let totalPrice = total;
  //   if (curr === child$) totalPrice += child$ * child;
  //   if (curr === adult$) totalPrice += adult$ * adult;
  //   if (curr === senior$) totalPrice += senior$ * senior;
  //   return totalPrice;
  // }, 0);
}
console.log(calculateEntry( [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
]));

module.exports = { calculateEntry, countEntrants };

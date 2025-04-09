// 4. sumSalaries(salaries) → 3900
// const salaries = {
//   John: 1000,
//   Ann: 1600,
//   Pete: 1300
// };

function sumSalaries(salaries) {
  let result = 0;
  for (const key in salaries) {
    if (typeof salaries[key] === 'number') {
      result += salaries[key];
    }
  }
  return result;
}

const salaries1 = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
};

console.log(sumSalaries(salaries1));

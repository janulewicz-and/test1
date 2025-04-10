// /**
//  * Функция принимает массив чисел и возвращает объект с двумя свойствами: sum и avg
//  * @param {number[]} arr - массив чисел
//  * @returns {object} - объект с двумя свойствами: sum и avg
//  * @example
//  * calculate([1, 2, 3])
//  * // { sum: 6, avg: 2 }
//  */
// const calculate = (arr) => {}

function sumAvg(arr) {
  let result = 0;
  for (let key in arr) {
    if (typeof arr[key] === 'number') result += arr[key];
    else return false;
  }
  return {
    sum: result,
    avg: result / arr.length,
  };
}

let arr1 = [1, 'f', 3];
console.log(sumAvg(arr1));

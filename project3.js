// 7. Добавить свойство active: true всем объектам
const people = [{ name: 'Alice' }, { name: 'Bob' }];

function addToArr(arr) {
  let result = [];
  for (const key in arr) {
    let added = arr[key];
    added.active = true;
    result.push(arr[key]);
  }
  return result;
}
console.log(addToArr(people));

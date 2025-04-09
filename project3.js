function findUserByName(arr, findName) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === findName) {
      result = arr[i];
    }
  }
  return result;
}
const users = [
  { name: 'Ivan', age: 22 },
  { name: 'Anna', age: 19 },
  { name: 'Oleg', age: 31 },
];

console.log(findUserByName(users, 'Anna'));

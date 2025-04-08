const users1 = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 30 },
];

function filterAdults(users) {
  // let result = [];
  // users.forEach((user) => {
  //   if (user.age >= 18) {
  //     result.push(user);
  //   }
  // });
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].age >= 18) {
  //     result.push(users[i]);
  //   }
  // }
  return users.filter((user) => user.age >= 18);
}

function isEmpty(obj) {
  return Object.keys(obj).every((key) => key === undefined);
}
let arr1 = [
  ['a', 1],
  ['b', 2],
];
function arrayToObject(arr) {
  return Object.fromEntries(arr);
}

const users = [
  { name: 'Ivan', age: 22 },
  { name: 'Anna', age: 19 },
  { name: 'Oleg', age: 31 },
];

function findUserByName(arr, findName) {
  arr.forEach((user) => {
    user.name === findName;
    return user;
  });
}

console.log(findUserByName(users, 'Anna'));

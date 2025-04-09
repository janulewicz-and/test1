function arrToObj(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  return result;
}
let arr1 = ['a: 1', 'b: 2'];
console.log(arrToObj(arr1));

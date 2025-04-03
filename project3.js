let words = [1, 5, 3, 5, 2];
console.log(arr(words, 15));


function arr(arr, number){
    if(arr.indexOf(number) !== -1) return true;
    else  return false;
}

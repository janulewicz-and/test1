function slice(arr, start, end){
    let result = [];
    for(let i = start; i < end; i++){
        result.push(arr[i])
    }
    return result;
}

let arr = [1, 2, 3, 4, 5, 6]

console.log(slice(arr, 2, 4))
function prepend(arr, ...items){
    let result;
    for(let i = 0; i < items.length; i++){
        let j = items[i];
        arr.unshift(j);
    }
    return arr
}
let massive = ["js", "react"]
console.log(prepend( massive, 'cat', 'dog', 'mouse', 'bird'))
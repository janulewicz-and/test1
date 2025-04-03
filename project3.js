function concat(arr, ...items){
    let copyOfArr = [];
    for(let i = 0; i < arr.length; i++ ){
        copyOfArr.push(arr[i]);
    }
    for(let i = 0; i < items.length; i++){
        for(let j = 0; j < items[i].length; j++){
            copyOfArr.push(items[i][j]);
        }
    }
    return copyOfArr
}
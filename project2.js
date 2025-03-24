function word(a, b){
    if(b.length > a.length){
         return false;
    }
    for(let i = b.length - 1; i >= 0; i--){
        if (a[a.length - b.length + i] !== b[i]){
        return(false);
        }
}
return true;
}

function stair(p){
    let result = '';
    for(let i = 1; i <= p; i++){
        for(let j = 1; j <= i; j++){
            result += j + ' ';
        }
    result += '\n';
}
return result;
}

console.log(stair(10));
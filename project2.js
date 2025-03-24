function lettersCheck(a, b){
    if(b.length > a.length){
         return false;
    }
    for(let i = b.length - 1; i >= 0; i--){
        if (a[a.length - b.length + i] !== b[i]){
        return false ;
        }
}
return true;
}

function makeChair(p){
    let result = '';
    for(let i = 1; i <= p; i++){
        for(let j = 1; j <= i; j++){
            result += j + ' ';
        }
        result += '\n';
    }   
    return result;
}


function countVowels(q){
    let result = 0;
    for(let i = 0; i <= q.length - 1; i++){
        if(q[i] === 'a' || q[i] === 'e' || q[i] === 'o' || q[i] === 'u' || q[i] === 'i'){
            result += 1;
        }    
    }
    return result;
}

console.log(countVowels('hello world'))
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


let dictionary = {
    a: 'a',
    e: 'e',
    o: 'o',
    u: 'u',
    i: 'i',
    A: 'A',
    E: 'E',
    O: 'O',
    U: 'U',
    I: 'I',
}

function countVowels(q){
    let result = 0;
    for(let i = 0; i <= q.length - 1; i++){
        if(q[i] in dictionary){
            result += 1;
        }    
    }
    return result;
}


function countVowels1(q){
    let letters = 'aeouiAEOUI';
    let result = 0;
    for(let i = 0; i <= q.length; i++){
        if(letters.includes(q[i])){
            result += 1;
        }    
    }
    return result;
}

console.log(countVowels1('HELLO WORLD'))
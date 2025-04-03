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

function includes(a, b){
    for(let i = 0; i < a.length; i++){
        let result = '';
      for(let j = 0; j < b.length; j++){
        let newindex = i + j;
        result += a[newindex];
        }
        if(result === b){
            return true;
        }
    }   
    return false;
}

function concat(...args){
    let result = '';
    for(let i = 0; i < args.length; i ++){
        result += args[i];
    }
    return result;
}

function repeat(a,b){
    let result = '';
    if(b < 0 || typeof b !== number || b > Infinity ){
        return false;
    }
    if(typeof a !== 'string'){
        return false;
    }
    for(let i = 0; i < Math.floor(b); i++){
        result += a;
    }
    return result;
}

function substring(a, b, c){
    if(typeof a !== 'string'){
        return false;
    }
    if(b === c){
        return '';
    }
    if(b === undefined){
        b = a.length;
    } 
    if(isNaN(c) || c <= 0){
        c = 0;
    }
    if(isNaN(b) || b <= 0){
        b = 0
    }
    if( a.length < b){
        b = a.length;
    }
    if(a.length < c){
        c = a.length;
    }
    if(b > c){
        let b1 = b;
        b = c;
        c = b1;
    }
        let result ='';
        for(let i = b; i < c; i++){
            result += a[i];
        }
    return result;
}

function trimStart(a){
    result= "";
    let i = 0;
    for(; i < a.length; i++){
        if(a[i] !== ' '){
            break;
        }
    }
    for(let j = i; j < a.length; j++){
        result += a[j];
    }
    return result;
}

function trimEnd(a){
    let result= "";
    let i = a.length - 1;
    for(; i > 0; i--){
        if(a[i] !== ' '){
            break;
        }
    }
    for(let j = 0; j <= i; j++){
        result += a[j];
    }
    return result;
}

function trim(a){
    let result1 = "";
    let result = '';
    let i = 0;
    for(; i < a.length; i++){
        if(a[i] !== ' '){
            break;
        }
    }
    for(let j = i; j < a.length; j++){
        result1 += a[j];
    }

    let y = a.length - 1;
    for(; y > 0; y--){
        if(a[y] !== ' '){
            break;
        }
    }
    for(let u = i; u <= y; u++){
        result += a[u];
    }
    return result;
}


function splice(arr, start, number, ...items){
    if(typeof start !== 'number' || typeof number !== 'number') return false;
if(start < 0){
    start = arr.length + start;
    if(start < 0) start = 0;
}
resultOfLoops = [];
let resultOfFirstLoop = [];
let resultOfSecondLoop = [];
let removed = [];
for(let i = 0; i < start; i++){
    resultOfFirstLoop.push(arr[i]);
}
for(let i = start; i <start + number; i++){
    removed.push(arr[i]);
}
for(let i = start + number; i < arr.length; i++){
    resultOfSecondLoop.push(arr[i]);
}
resultOfLoops = resultOfFirstLoop.concat(resultOfSecondLoop);
if(items !== undefined){
    resultOfFirstLoop.push(...items);
    let fullArr = resultOfFirstLoop.concat(resultOfSecondLoop);
    return fullArr
} else return 
    {resultOfLoops, 
    removed
};
}

function slice(arr, start, end){
    let result = [];
    for(let i = start; i < end; i++){
        result.push(arr[i])
    }
    return result;
}
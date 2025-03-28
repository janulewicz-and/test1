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



console.log(trim('  квадроцикл би би би    '));
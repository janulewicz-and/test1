function substring(a, b, c){
    if(b === undefined || c === undefined){
        return a;
    }
    if(typeof b !== 'number' || typeof c !== 'number' || a.length < c || a.length < b || c < b || b < 0 || c < 0){
        return false;
    }
        let result ='';
        for(let i = b; i < c; i++){
            result += a[i];
        }
    return result;
}
        

console.log(substring('квадроцикл', 1, 7))
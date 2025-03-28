function substring(a, b, c){
    if(c === undefined){
        c = a.length;
    }
    if(b === undefined){
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
        

console.log(substring('квадроцикл', , 7));
var anyString = "квадроцикл";
console.log(anyString.substring(,7))
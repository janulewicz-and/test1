function substring(a, b, c){
    if(a === b){
        return '';
    } else if(b === undefined){
        b = a.length;
    } else if(isNaN(c) || c <= 0){
        c = 0;
    } else if(isNaN(b) || b <= 0){
        b = 0
    } else if( a.length < b){
        b = a.length;
    } else if(a.length < c){
        c = a.length;
    } else if(b > c){
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
        

var anyString = "квадроцикл";
console.log(anyString.substring(5, 'dasdas'));


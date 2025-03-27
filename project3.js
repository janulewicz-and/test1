function letters(a,b){
    result = '';
    for(let i = 0; i < a.length; i++){ 
      for(let j = 0; j < 3; j++){
        let newindex = i + j;
        result += a[newindex];
        }
        result += " ";
    }
    return result;
    
}

console.log(letters('papakarlo' , 'mamakarlo'))

function letters(a, b){
    for(let i = 0; i < a.length; i++){
        let result = '';
      for(let j = 0; j < b.length; j++){
        let newindex = i + j;
        result += a[newindex];
        }
        if(result === b){
            return true;
        }else{
            return false;
        }
    }   
}
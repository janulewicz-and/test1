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

console.log(word('vlad', 'lad'))
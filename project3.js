function concat(...args){
    result = '';
    for(i = 0; i < args.length; i ++){
        result += args[i];
    }
    return result;
}


console.log(concat('papa','mama','sobaka','!'));
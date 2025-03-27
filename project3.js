function CONC(...args){
    result = '';
    for(i = 0; i < args.length; i ++){
        result += args[i] + ' ';
    }
    return result;
}


console.log(CONC('papa','mama','sobaka','!'))
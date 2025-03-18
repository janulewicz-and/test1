
function ask(question , yes , no) {
    if(confirm(question)) yes();
    else no()
}
ask('are you agree?',
       () => alert('yes'), 
       () => alert('no')
       
      );


console.log('Updated version');

function pow(b) {
    let result = 1;
    for (let i = 1; i < b; i++) {
        result *= i;
}
    return result
}

let arg1 = +prompt('введите свое число', '');
alert(pow(arg1));

function ask(question , yes , no) {
    if(confirm(question)) yes();
    else no()
}
ask('are you agree?',
       () => alert('yes'), 
       () => alert('no')
       
      );

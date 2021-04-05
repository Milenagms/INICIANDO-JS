/*
##LET E CONST 
    const e let são locais e só funcionam no escopo onde foi criada.

*/

let y = 1;
    {
        y = 0
        console.log('> existe Y antes do bloco?', y)
    }
console.log ('> existe Y depois do bloco?', y)
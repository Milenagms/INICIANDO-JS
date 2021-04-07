// throw
  function sayMyname(name = ''){
    if (name === '') {
        throw 'Nome é obrigatório'
     }
    console.log(name)
  }
// try...catch
try{
  sayMyname ('Milena')
} catch(e){
  console.log(e)
}

console.log('Após ao try/catch')
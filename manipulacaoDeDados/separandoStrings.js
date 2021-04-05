/* Manipulação de Strings e Arrays

    Separe um tetxto que contém espaços, em um novo array onde cada texto é uma possição do array. Depois disso, transforme o array em um tetxto e onde eram espaços, coloque _
*/


let phrase = "Eu quero viver o Amor"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
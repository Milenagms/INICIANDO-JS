//if...else

let temperature = 37
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log('febre alta')
}else if(mediumTemperature) {
  console.log ('Febre moderada')
}else{
  console.log('Saudável')
}

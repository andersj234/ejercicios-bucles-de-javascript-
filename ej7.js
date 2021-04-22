let numerador = parseInt(window,prompt('Escoge un numerador'));
let denominador = parseInt(window.prompt('Escoge un denominador'));

if(denominador===0){
    console.log('este numero no se puede dividir por cero')
}
else {
    console.log(numerador/denominador)
}

denominador===0 ? console.log('este numero no se puede dividir por 0') : console.log(numerador/denominador);
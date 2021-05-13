let numerador = parseInt(window,prompt('Escoge un numerador'));
let denominador = parseInt(window.prompt('Escoge un denominador'));

if(denominador>0){
    console.log(numerador/denominador)
}
else {
    console.log('No se puede dividir entre 0');
}

denominador===0 ?  console.log(numerador/denominador)
: console.log('este numero no se puede dividir por 0');
let num1 = parseInt(window.prompt('Escribe un numero'))
let num2 = parseInt(window.prompt('Escribe un numero'))
let num3 = parseInt(window.prompt('Escribe un numero'))

let valor= 20

if(Math.abs(num1-num2)=== valor /*|| Math.abs(num1-num3)=== valor || Math.abs(num2-num3)=== valor* tambien se puede hacer asi*/){
    console.log(`Diferencia entre ${num1} y ${num2} es 20`)
}
if(Math.abs(num1-num3)=== valor ){
    console.log(`Diferencia entre ${num1} y ${num3} es 20`)
} //si pusieramos un else if no evaluaria la segunda condicion si la primera fuera true por lo que se harian con 3 if(lo que hace if es)
if(Math.abs(num2-num3)=== valor ){
    console.log(`Diferencia entre ${num2} y ${num3} es 20`)
}
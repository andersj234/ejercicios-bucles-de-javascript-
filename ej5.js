let dia= window.prompt('Introduce un dia de la semana').toLowerCase() //para que todo lo convierta en minusculas para que no nos de problemas a la hora de igualar valores

if(dia === 'lunes' || dia ==='martes'|| dia ==='miercoles' ||dia ==='jueves' || dia ==='viernes'){
    console.log(`hoy es ${dia}`)
}
else if(dia === 'sabado' || 'domingo'){
    console.log('hoy es fin de semana')
}
else{
    console.log('no digas chorradas')
}

switch(dia){
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log(`hoy es ${dia}`)
        break;
    case 'sabado':
    case 'domingo':
        console.log(`hoy es fin de semana`)
        break;
        default:
        console.log('no digas nada mas')
}

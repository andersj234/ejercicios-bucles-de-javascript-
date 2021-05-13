        let numero1= parseInt(window.prompt('escoge un numero'));
        let numero2= parseInt(window.prompt('escoge otro numero'));

        console.log(numero1+numero2);
        console.log(numero1-numero2);
        console.log(numero1*numero2);
        console.log((numero1+numero2)/2);
        
        let a= numero1< numero2;
        let b=numero1>numero2;
        //este tambien valdria pero no lo uses porque asi te estas complicando
        /*switch(a){
         case true:
                 console.log(`${numero1} es el menor`)
        
        case false:
                 console.log(`${numero1}es el mayor`)
        }
        switch(a){
        case true:
                 console.log(`${numero2} es el menor`)
               
        case false:
                 console.log(`${numero2}es el mayor`)
        }*/
       
        if(numero1< numero2){
                console.log(`${numero1} es menor que ${numero2}`)
        }
        else if(numero2 < numero1 ) {
                console.log(`${numero2} es menor que ${numero1}`)
        }
        else{
                console.log("los dos son iguales")
        }
   
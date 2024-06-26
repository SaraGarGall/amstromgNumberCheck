/*3)	Armstrong Number Check: An Armstrong number is a number equal to the sum
of the cubes of its digits. Check if a given number is an Armstrong number. 
(e.g., 153 = 1^3 + 5^3 + 3^3)*/

const prompt = require('prompt-sync')();
const checkNumbers = require('./utility');

let number = prompt('Enter the number you want to check if it is an Amstrong number: ');

const numberRequested = parseInt(number);

if(isNaN(numberRequested)){
    process.exit(1);
}

console.log('Is the number ', number, ' an Armstrong number?');


let armstrongNumberChecked = checkNumbers.armstrongNumberCheck(numberRequested);
console.log(armstrongNumberChecked);

// parseInt para que sea un numero  ***DONE
//condicional para que que lo introducido tenga que ser un numero **DONE
//dividiendo y me voy quedando con el resto,dividiendo entre 10 ** DONE 

//NUEVA PROHIBICION: NO USAR ARRAYS, OBJETOS, MAP, SET 


//probar las dos funciones sumOfThe Cubes con:
    //un numero positivo
    //un numero negativo
    //cero
    //letra
    //numero con letra

//checkNumbers.doWhileTraining()
/*function sumOfTheCubes(numberRequested) {
  let arrayOfNumbers = numberRequested.split('');
  let sum = 0;
  for (i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i] ** 3;
  }
  console.log(numberRequested, ' = ', sum);
  return sum;
}*/

/*function doWhileTraining() {
  console.log('Inicio');
  let sum = 10;
  do {
    console.log(sum);
    sum -= 1;
  } while (sum >= 0);

  console.log('Fin');
}*/

function sumOfTheCubesNumber(number) {
  //la funcion ya recibe un numero (en main me tengo que asegurar de que sea un numero)
  //no puedo tranformarlo en string
  //let arrayOfNumbers = [];
  let sum = 0;
  let remainder;

  do {
    remainder = number % 10;
    number = Math.floor(number / 10);
    //arrayOfNumbers.push(remainder);
    sum += remainder ** 3;
  } while (number > 0);

  /*for (i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i] ** 3;
  }*/

  return sum;
}

function armstrongNumberCheck(num) {
  let totalSumOfCubes = sumOfTheCubesNumber(num);
  return num == totalSumOfCubes;
}

module.exports = { sumOfTheCubesNumber, armstrongNumberCheck};

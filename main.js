'use strict';

//NÚMERO AL AZAR

// Genero un número aleatorio con la ayuda de Math.random y Math.ceil

function getRandomArbitrary(min, max) {
return Math.ceil(Math.random() * (max - min)) + min;
}
var numberRandom = getRandomArbitrary(1,100);

//JUEGO BÁSICO MÁS CONTADOR

// ENUNCIADO--> Cuando el usuario pulsa el botón de prueba, se compara el número del input con el número al azar.
//Para hacer esto, hay que crear una función call-back. Mi función call-back se llama checkNumber. Primero he localizado en el DOM el elemento sobre el que quiero escuchar el event (botón prueba=buttonNumber) y después he creado un método addEventListener.

var buttonNumber = document.querySelector('.buttonNumber');
buttonNumber.addEventListener('click', checkNumber);

// He llamado a todos los elementos que necesito para la primera parte del ejercicio y los he guardado en variables. El número que introduce el usuario es un string, para poder comparar necesito que sea un número y he usado un parseInt dentro de la función checkNumber.

var inputUserNumber = document.querySelector ('#cellNumber');

// ENUNCIADO---> En rojo en la esquina superior derecha aparece el número de intentos realizados.
// Para hacer esto he creado un contador con una variable que parte de 0 (var counterAcumulator) y se suma a sí misma dentro de la función checkNumber.

var textClue = document.querySelector ('.clue-cell');
var counterPlus= document.querySelector ('.counter');
var counterAcumulator= 0;

// ENUNCIADO--> se compara el número del input con el número al azar. Si es mayor la pantalla muestra ("demasiado alto") si es menor, la pantalla muestra "demasiado bajo", si es igual la pantalla muestra "acertado")
// Para hacer esto he creado un if, else if dentro de la función checkNumber.

// ENUNCIADO--> Cuando el jugador consigue acertar, aparece una sección sobre las pistas para introducir el nombre y guardar la puntuación en el histórico.
// Dentro del segundo else if deshabilito con remove la class hidden sobre el elemento form-name para que aparezca.

function checkNumber(){
  counterAcumulator= counterAcumulator+1;
  counterPlus.innerHTML= counterAcumulator;

  var valueUserNumberAsString = inputUserNumber.value;
  var valueUserNumber = parseInt (valueUserNumberAsString);

  if (valueUserNumber > numberRandom){
    textClue.innerHTML= "Tu número es demasiado alto";
  } else if (valueUserNumber < numberRandom) {
    textClue.innerHTML= "Tu número es demasiado bajo";
  } else if (valueUserNumber === numberRandom){
    textClue.innerHTML= "¡Has acertado!";
    var showButtonName= document.querySelector('.form-name');
    showButtonName.classList.remove('hidden');
  }
  // alert (numberRandom);
};

//HISTÓRICO Y RESET DE INPUTS

// ENUNCIADO--> cuando el jugador escriba su nombre y pulse en guardar, almacenaremos el nombre del jugador y el número de intentos en una estructura de datos; recomendamos usar un objeto para almacenar la información de cada elemento del histórico (nombre e intentos)

//En esta parte he creado una nueva función call-back que se llama nameRanking. También he llamado a los elementos y los he guardado en variables. Dentro de la función, con el innerHTML de la ul consigo introducir nombre del jugador y el número de intentos.

var buttonName= document.querySelector('.buttonName'); //--boton de nombre
buttonName.addEventListener('click',nameRanking);

var user= document.querySelector('.nameUser'); //---input nombre jugador

var playerList= document.querySelector('.rankingList'); //---ul


// ENUNCIADO-->una vez guardado en el histórico, automáticamente la sección de histórico se repinta para mostrar los nuevos datos, después de lo anterior, también automáticamente, se prepara el juego para una nueva partida:se oculta la sección para introducir el nombre: se genera un nuevo número aleatorio, se pone el contador de intentos a 0, se limpia el campo de feedback, se limpian los inputs.

//He creado una variable para guardar el contador reseteado, también he habilitado la class hidden para que la sección del nombre se oculte, he vuelto a poner la función de número aleatorio y he dejado un string vacío para la variables de los inputs y una nueva string para el textclue (texto azul de las pistas)

var resetCounter= document.querySelector ('.counter');

function nameRanking () {
  playerList.innerHTML+= '<li>' + user.value + ' - ' + counterAcumulator + ' intentos' + '</li>';
  var showButtonName= document.querySelector('.form-name');
  showButtonName.classList.add('hidden');
  numberRandom = getRandomArbitrary(1,100);
  counterAcumulator= 0;
  resetCounter.innerHTML= counterAcumulator;
  cellNumber.value="";
  user.value="";
  textClue.innerHTML= "Escribe un número y dale a <span>Prueba</span>";
}

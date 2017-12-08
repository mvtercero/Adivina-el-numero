'use strict';

// generar un número aleatorio con la ayuda de Math.random y Math.ceil
// al pulsar el botón de prueba comparamos el número que el usuario ha escrito en el input con el número aleatorio, y pintamos el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "acertado")
// actualizamos el contador de intentos cada que el usuario pruebe

// Número al azar


function getRandomArbitrary(min, max) {
return Math.ceil(Math.random() * (max - min)) + min;
}

var numberRandom = getRandomArbitrary(1,100);

// Cuando el usuario pulsa el botón de prueba, se compara el número del input con el número al azar

var buttonNumber = document.querySelector('.buttonNumber');
buttonNumber.addEventListener('click', checkNumber);



// Para comparar el valor del imput value hay que convertirlo a número con parseInt.
var inputUserNumber = document.querySelector ('#cellNumber');

// se compara el número del input con el número al azar. Si es mayor la pantalla muestra ("demasiado alto") si es menor, la pantalla muestra "demasiado bajo", si es igual la pantalla muestra "acertado")

// var inputUserNumber = document.querySelector ('#cellNumber');
// inputUserNumber.addEventListener ('click', checkNumber);

var textClue = document.querySelector ('.clue-cell');
var counterPlus= document.querySelector ('.counter');
var counterAcumulator= 0;

// En rojo en la esquina superior derecha aparece el número de intentos realizados. Cuando consigue acertar, aparece una sección sobre las pistas para introducir el nombre y guardar la puntuación en el histórico.

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
  alert (numberRandom);
};

// En rojo en la esquina superior derecha aparece el número de intentos realizados. Cuando consigue acertar, aparece una sección sobre las pistas para introducir el nombre y guardar la puntuación en el histórico.


// cuando el jugador escriba su nombre y pulse en guardar, almacenaremos el nombre del jugador y el número de intentos en una estructura de datos; recomendamos usar un objeto para almacenar la información de cada elemento del histórico (nombre e intentos)

var buttonName= document.querySelector('.buttonName'); //--boton de nombre
buttonName.addEventListener('click',nameRanking);

var user= document.querySelector('.nameUser'); //---nombre jugador

var playerList= document.querySelector('.rankingList'); //---ul


// Tengo que incluir el nombre del jugador y los intentos en la ul, li
//se oculta la sección para introducir el nombre
// se genera un nuevo número aleatorio
// se pone el contador de intentos a 0
// se limpia el campo de feedback
// se limpian los inputs

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









// HISTÓRICO

// <form>
//   <input id="name" type="text">
//   <input id="name" type= "submit" value="Guardar nombre">
//  </form>
//  <ul>
//  </ul>
// <script>
// var button= document.querySelector ('#button');
// var input= document.querySelector ('#name');
// var list= document.querySelector('ul');
// button.addEventListener ('click', function (event)){
// event.preventDefault ();
// var li = document.createElement ('li');
// li.textContent = input.value;
// list.appendChild(li);
// input.value= '';
// });
// </script>

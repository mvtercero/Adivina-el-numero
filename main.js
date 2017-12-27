'use strict';

var randomNumber = getRandomNumber(1,100);
var counterAcumulator= 0;

var tryButton = document.querySelector('.buttonNumber');
var numberInput = document.querySelector ('#cellNumber');
var textClue = document.querySelector ('.clue-cell');
var attemptsCounter = document.querySelector ('.counter');
var playerInfoForm = document.querySelector('.form-name');
var addPlayerToRankingButton= document.querySelector('.buttonName');
var playernameInput = document.querySelector('.nameUser'); //---input nombre jugador
var rankingList= document.querySelector('.rankingList'); //---ul

tryButton.addEventListener('click', checkNumber);
addPlayerToRankingButton.addEventListener('click', addPlayernameToRanking);

function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

function checkNumber(){
  counterAcumulator= counterAcumulator+1;
  attemptsCounter.innerHTML= counterAcumulator;

  var playerInput = numberInput.value;
  var chosenNumber = parseInt (playerInput);

  if (chosenNumber > randomNumber){
    textClue.innerHTML= "Tu número es demasiado alto";
  } else if (chosenNumber < randomNumber) {
    textClue.innerHTML= "Tu número es demasiado bajo";
  } else if (chosenNumber === randomNumber){
    textClue.innerHTML= "¡Has acertado!";
    playerInfoForm.classList.remove('hidden');
  }
};

function addPlayernameToRanking() {
  rankingList.innerHTML+= '<li>' + playernameInput.value + ' - ' + counterAcumulator + ' intentos' + '</li>';

  playerInfoForm.classList.add('hidden');
  randomNumber = getRandomNumber(1,100);
  counterAcumulator= 0;
  attemptsCounter.innerHTML= counterAcumulator;
  numberInput.value="";
  playernameInput.value="";
  textClue.innerHTML= "Escribe un número y dale a <span>Prueba</span>";
}

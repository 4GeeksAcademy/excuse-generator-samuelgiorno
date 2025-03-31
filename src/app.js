import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Array con excusas
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Generar una excusa aleatoria
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandom(anyArray){
  return anyArray[getRandomNumber(0, anyArray.length - 1)];
}

function generateExcuse() {
  let excuse = `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}`;
  return excuse;
}


window.onload = function(){
  console.log("Hello Samuel from the console!");
  document.querySelector('#excuse').innerHTML = generateExcuse();
}
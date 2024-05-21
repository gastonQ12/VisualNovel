var vidaEnemigo = 100;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = getRandomInt(1, 20);
var daño = randomNumber;

function clickBtn() {
  daño++;

  dañoRecibido = vidaEnemigo - daño;
  console.log(daño);
  var vidaActual =  document.getElementById("vida").firstChild.data = "Vida: " + dañoRecibido;
  var barra = document.getElementById("vidRojo");


  barra.style.width = dañoRecibido + "%";
}

function vidRojo(){
  

}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var vidaEnemigo = 100;

function clickBtn() {
  var randomNumber = getRandomInt(20, 35);
  var daño = randomNumber;
  vidaEnemigo -= daño;
  console.log(daño);
  
  var barra = document.getElementById("vidRojo");

  if( vidaEnemigo  <= 0){
    barra.style.width = 0 + "%";
    var vidaActual = document.getElementById("vida").firstChild.data = "Vida: " + 0;

    var ganaste = document.getElementById("ganaste");
    ganaste.style.opacity = 100 + "%";

  }else if(vidaEnemigo  >= 0){
    barra.style.width = vidaEnemigo + "%";
    var vidaActual = document.getElementById("vida").firstChild.data = "Vida: " + vidaEnemigo;
  }

}



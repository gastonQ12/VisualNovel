// declaracion de variables
const puntaje = document.getElementById('puntaje');
const pedir = document.getElementById('pedir');
const quedarse = document.getElementById('quedarse');
const vale_11 = document.getElementById('vale11');
const vale_1 = document.getElementById('vale1');

let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tipoCarta = ["picas", "corazon", "trebol", "diamante"];
let manoUser = [];
let manoEnemigo = [];
let manoCompleta = [];
// const manoJugador ={
// Pica: [],
// Corazon: [],
// Trebol: [],
// Diamante: []
// }
//contadores para saber en que posicion la numCarta
//No se puede poner dentro de la funcion donde deberia estar
//porque se llama varias veces
// contPica = 0, contCor = 0, contTre = 0, contDiam = 0;
let contadorCartas = 0;
let total = 0;
let aux = 0;

//obtener Carta aleatoria
function obtenerCartaAleatoria() {
  let numCarta = Math.floor(Math.random() * 10) + 1;
  let tipo = Math.floor(Math.random() * 4);
  let CartaGenerada = tipoCarta[tipo];

  manoCompleta[contadorCartas] = [CartaGenerada, numCarta];
  console.log(CartaGenerada, numCarta+"\n");
  contadorCartas++;

  return numCarta;

}



//muestra el puntaje del usuario
function mostrarPuntaje(manoUser) {
  total = 0;
  manoUser.forEach(function (numCarta) { total += numCarta; });
  puntaje.textContent = total;
}


//pedir numCarta
pedir.addEventListener("click", () => {
  numCarta = obtenerCartaAleatoria();
  manoUser.push(numCarta);
  mostrarPuntaje(manoUser);
  checkPuntaje();
});


//actualizar el puntaje y verificar si gana o pierde
function checkPuntaje() {
  if (total > 21) {
    location.href = "muerte.html";
  } else if (total === 21) {
    location.href = "vivo.html";
  }
}

// boton quedarse
quedarse.addEventListener("click", () => {

  puntajeCrupier();

});


function puntajeCrupier() {
  while (aux < 17) {
    numCarta = obtenerCartaAleatoria();
    manoEnemigo.push(numCarta);
    manoEnemigo.forEach(function (numCarta) { aux += numCarta; });
    if (aux == 17 || aux > 21) {
      location.href = "vivo.html";
    }
    else if (aux == 21 || total < aux) {
      location.href = "muerte.html";
    }
  }
  if (total > aux) {
    location.href = "vivo.html";
  }
}
function checkPuntajeCrupier() {

}

//goat  
let contadorr = 0;
pedir.addEventListener("click", () => {
  
  // for (i = 0; i < manoCompleta.length; i++) {
  
    let tipoCarta = manoCompleta[contadorr][0];
    let numeroCarta = manoCompleta[contadorr][1];
    const img = document.createElement('img');
    switch(numeroCarta){
      case 1:
        img.src = `imgs/img-cartas/${tipoCarta}-A.svg`;
      break;
      default:
        img.src = `imgs/img-cartas/${tipoCarta}-${numeroCarta}.svg`;
    }
    img.setAttribute("class", "cartas")
    const contenedor = document.getElementById('contenedor-cartas');
    contenedor.appendChild(img);
    console.log("tamaño: "+manoCompleta.length);
    
    
  // }
  contadorr++;
});
// boton pedir numCarta
// function pedirCarta() {
//   numCarta = obtenerCartaAleatoria();
//   manoUser.push(numCarta); 
//   mostrarPuntaje(manoUser);
//   return 
// }

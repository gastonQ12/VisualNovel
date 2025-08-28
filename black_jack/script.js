// declaracion de variables

let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let manoUser = [];
let manoEnemigo = [];
const puntaje = document.getElementById('puntaje');
const puntajeEnemigo = document.getElementById('c');
const pedir = document.getElementById('pedir');
const quedarse = document.getElementById('quedarse');
const vale_11 = document.getElementById('vale11');
const vale_1 = document.getElementById('vale1');
let total = 0;
let aux = 0;

//obtener carta aleatoria
function obtenerCartaAleatoria() {
  let carta = Math.floor(Math.random() * 11) + 1;
  return carta
}

//muestra el puntaje del usuario
function mostrarPuntaje(manoUser) {
  total = 0;
  manoUser.forEach(function (carta) { total += carta; });
  puntaje.textContent = total;
}


//pedir carta
pedir.addEventListener("click", () => {
  carta = obtenerCartaAleatoria();
  manoUser.push(carta);
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
    carta = obtenerCartaAleatoria();
    manoEnemigo.push(carta);

    let puntajeC = manoEnemigo.forEach(function (carta) { aux += carta; });
   
    mostrarPuntajeEnemigo(puntajeC);
    setTimeout(function () {
      if (aux == 17 || aux > 21) {
        location.href = "vivo.html";
      }
      else if (aux == 21 || total < aux) {
        location.href = "muerte.html";
      }
    }, 5000);

  }
  if (total > aux) {
    location.href = "vivo.html";
  }
}
function mostrarPuntajeEnemigo(manoEnemigo) {
  puntajeEnemigo.textContent = manoEnemigo;
}
function checkPuntajeCrupier() {

}


// boton pedir carta
// function pedirCarta() {
//   carta = obtenerCartaAleatoria();
//   manoUser.push(carta); 
//   mostrarPuntaje(manoUser);
//   return 
// }
const puntajeJugador = document.getElementById('puntaje');
const puntajeEnemigo = document.getElementById('puntaje-enemigo');
const pedir = document.getElementById('pedir');
const contenedorJugador = document.getElementById('contenedor-cartas');
const contenedorEnemigo = document.getElementById('contenedor-cartas-enemigo');
const quedarse = document.getElementById('quedarse');
const vale_11 = document.getElementById('vale11');
const vale_1 = document.getElementById('vale1');
const pantallaMuerte = document.getElementById("cont-pantalla-muerte");
const pantallaVivo = document.getElementById("cont-pantalla-vivo")

let cartasJugador = crear_Cartas();
let cartasCrupier = crear_Cartas();
let totalJugador = 0;
let totalEnemigo = 0;
let contadorCartasJugador = 0;
let contadorCartasCrupier = 0;
function obtenerCartaAleatoria() {
  let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let tipoCarta = ["picas", "corazon", "trebol", "diamante"];
  let cartaAleatoria = [tipoCarta[Math.floor(Math.random() * 4)], cartas[Math.floor(Math.random() * 10)]];
  return cartaAleatoria;
};

function crear_Cartas() {
  let cartas = [];
  for (i = 0; i < 21; i++) {
    cartas.push(obtenerCartaAleatoria());
  }
  return cartas;
};

function mostrar_Cartas(carta, usuario) {
  const img = document.createElement('img');
  img.setAttribute("class", "cartas");
  //*carta = ["tipo","numero"]
  if (carta[1] == 1) {
    img.src = `imgs/img-cartas/${carta[0]}-A.svg`;
  } else {
    img.src = `imgs/img-cartas/${carta[0]}-${carta[1]}.svg`;
  };
  switch (usuario) {
    case "crupier":
      contenedorEnemigo.appendChild(img);
      break;
    case "jugador":
      contenedorJugador.appendChild(img);
      break;
  }
}
function sumarCartas(cantCartas, arrayCartas) {
  for (i = 0; i < cantCartas; i++) {
    arrayCartas == cartasJugador ? totalJugador += arrayCartas[i][1]: totalEnemigo += arrayCartas[i][1];
  }
  arrayCartas == cartasJugador ? puntajeJugador.textContent = totalJugador: puntajeEnemigo.textContent = totalEnemigo;
}
function desactiva_Botones(){
  quedarse.disabled = true;
  pedir.disabled = true;
}

function mostrar_Cart_Iniciar() {
  mostrar_Cartas(cartasCrupier[0], "crupier");
  sumarCartas(1,cartasCrupier);
  contadorCartasCrupier = 1;
  mostrar_Cartas(cartasJugador[0], "jugador");
  mostrar_Cartas(cartasJugador[1], "jugador");
  sumarCartas(2,cartasJugador);
  contadorCartasJugador = 2;
};
mostrar_Cart_Iniciar();

quedarse.addEventListener("click", () => {

  while(totalEnemigo <= totalJugador){
    totalEnemigo = 0;
    mostrar_Cartas(cartasCrupier[contadorCartasCrupier], "crupier");
    contadorCartasCrupier++;
    sumarCartas(contadorCartasCrupier, cartasCrupier);
    console.log(totalEnemigo)
  }
  const razon_p = document.createElement('p');
  razon_p.setAttribute("class", "razon");
  
  if(totalJugador == 21){
    razon_p.textContent = "Llegaste a 21"
    pantallaVivo.appendChild(razon_p);  
    pantallaVivo.removeAttribute("style")
    setTimeout(function() {
      window.location.href = '../../index.html';
    }, 4000);
  }else if(totalJugador <  totalEnemigo && totalEnemigo <= 21){
    console.log("El enemigo suma más");
    razon_p.textContent = "El enemigo suma más";
    pantallaMuerte.appendChild(razon_p);
    pantallaMuerte.removeAttribute("style")
    setTimeout(function() {
      window.location.href = '../../index.html';
    }, 4000);
  }else if(totalEnemigo > 21){
    console.log("El enemigo se paso")
    razon_p.textContent = "El enemigo se paso";
    pantallaVivo.appendChild(razon_p);
    pantallaVivo.removeAttribute("style")
    setTimeout(function() {
      window.location.href = '../../index.html';
    }, 4000);

  }else if(totalEnemigo == totalJugador){
    console.log("Empate")
    setTimeout(function() {
      window.location.href = '../../index.html';
    }, 4000);
  }

});

pedir.addEventListener("click", () => {
  totalJugador = 0;
  console.log()
  mostrar_Cartas(cartasJugador[contadorCartasJugador], "jugador");
  contadorCartasJugador++;
  sumarCartas(contadorCartasJugador, cartasJugador);

  const razon_p = document.createElement('p');
  if(totalJugador > 21){
    razon_p.textContent = "Te pasaste de 21"
    pantallaMuerte.appendChild(razon_p);
    pantallaMuerte.removeAttribute("style");
    setTimeout(function() {
      window.location.href = '../../index.html';
    }, 4000);
  }else if(totalJugador == 21){
    razon_p.textContent = "Llgaste a 21"
    pantallaVivo.appendChild(razon_p);
    pantallaVivo.removeAttribute("style");
    setTimeout(function() {
      window.location.href = '../../index.html';
    }, 4000);
  }
})

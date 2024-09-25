// declaracion de variables

let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let manoUser = [];
let manoEnemigo = [];

// obtener carta aleatoria

function obtenerCartaAleatoria() {
  let carta = Math.floor(Math.random() * 11) + 1;
    return carta
}

  // generar mano

  function generarMano(){

    let mano = [];
    for(let i = 0; i <= 2; i++){
      mano.push(generarMano());
  }
    return mano; 
  }

document.write(generarMano());
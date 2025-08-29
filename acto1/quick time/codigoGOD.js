//declaro las variables
let tecla = letraRandom();
const boton = document.getElementById("button");
const botonTexto = document.getElementById("txt");
const barraVidaEnemigo = document.getElementById("hpChabon");
const barraVidaJugador = document.getElementById("hpJugador");
const shadow = document.querySelector('.shadow');
const parent = shadow.parentNode;

let vidaEnemigo = 100 ;
let vidaJugador = 100 ;
var aux = true;
botonTexto.textContent = tecla.toUpperCase();

// Función que ingresa la tecla y maneja la lógica de la vida
ingresarTecla(tecla);

// Obtener cuando la animación de la variable termina
shadow.addEventListener('animationiteration', function(event) {
    tecla = letraRandom();
    botonTexto.textContent = tecla.toUpperCase();
    boton.style.backgroundColor = "red";
    vidaJugador = vidaJugador - 10;
    barraVidaJugador.style.background = `linear-gradient(to right, 
    #AE0909 ${vidaJugador}%, 
    white ${vidaJugador - 100}%)`;
    checkGameOver();
});

// Función para ingresar la tecla
function ingresarTecla(tecla) {
    botonTexto.textContent = tecla.toUpperCase();
    document.addEventListener('keydown', function(event) {
        if(tecla == event.key){
            boton.style.backgroundColor = "green";
            vidaEnemigo = vidaEnemigo - 10;
            barraVidaEnemigo.style.background = `linear-gradient(to right, #AE0909 ${vidaEnemigo}%, white ${vidaEnemigo - 100}%)`; 
            tecla = letraRandom();
            botonTexto.textContent = tecla.toUpperCase();
            reiniciarTimer();
        } else {
            boton.style.backgroundColor = "red";
            vidaJugador = vidaJugador - 2;

            // Verificar si el jugador muere
            if (vidaJugador <= 0) {
                location.href = "muerteREMASTER/Morir.html";
            }

            barraVidaJugador.style.background = `linear-gradient(to right, 
            #AE0909 ${vidaJugador}%, 
            white ${vidaJugador - 100}%)`;

            tecla = letraRandom();
            botonTexto.textContent = tecla.toUpperCase();
        }

        // Verificar si el enemigo muere
        checkGameOver();
    });
}

// Función para verificar si el juego terminó
function checkGameOver() {
    if (vidaEnemigo <= 0) {
        location.href = "../../index.html";  // Redirigir al menú cuando el enemigo muere
    }
}

// Función para generar la letra random
function letraRandom() {
    const letras = ['a', 's', 'd', 'w', 'e', 'q', 'f', 'z', 'x', 'c'];
    const indexRandom = Math.floor(Math.random() * letras.length);
    return letras[indexRandom];
}

// Función para reiniciar el timer de la animación
function reiniciarTimer() {
    shadow.style.animation = 'none'; // Pausar animación
    void shadow.offsetWidth; // Forzar reflow (reinicio de estilo)
    shadow.style.animation = ''; // Volver a añadir animación CSS
}

//declaro las variables
let tecla = letraRandom();
const boton = document.getElementById("button");
const botonTexto = document.getElementById("txt");
const barraVidaEnemigo = document.getElementById("hpChabon");
const barraVidaJugador = document.getElementById("hpJugador");
const shadow = document.querySelector('.shadow');

let vidaEnemigo = 100;
let vidaJugador = 100;

botonTexto.textContent = tecla.toUpperCase();

// ---------------- EVENTO TECLA ----------------
document.addEventListener('keydown', function (event) {
    if (event.key === tecla) {
        // Acierta
        boton.style.backgroundColor = "green";
        vidaEnemigo -= 10;
        barraVidaEnemigo.style.background = `linear-gradient(to right, #AE0909 ${vidaEnemigo}%, white ${vidaEnemigo - 100}%)`;

        // Generar nueva letra al acertar
        tecla = letraRandom();
        botonTexto.textContent = tecla.toUpperCase();

        reiniciarTimer();
        checkGameOver();
    } else {
        // Si falla → no cambia la letra
        boton.style.backgroundColor = "red";
    }
});

// ---------------- EVENTO ANIMACIÓN ----------------
shadow.addEventListener('animationiteration', function () {
    // Si no apretó la tecla a tiempo → pierde vida
    vidaJugador -= 10;
    barraVidaJugador.style.background = `linear-gradient(to right, 
        #AE0909 ${vidaJugador}%, 
        white ${vidaJugador - 100}%)`;

    if (vidaJugador <= 0) {
        location.href = "muerteREMASTER/Morir.html"; 
    }

    // Generar nueva letra SOLO al terminar el ciclo
    tecla = letraRandom();
    botonTexto.textContent = tecla.toUpperCase();
    boton.style.backgroundColor = "red";

    checkGameOver();
});

// ---------------- FUNCIONES ----------------
function checkGameOver() {
    if (vidaEnemigo <= 0) {
        location.href = "../../index.html";  
    }
}

function letraRandom() {
    const letras = ['a', 's', 'd', 'w', 'e', 'q', 'f', 'z', 'x', 'c'];
    return letras[Math.floor(Math.random() * letras.length)];
}

function reiniciarTimer() {
    shadow.style.animation = 'none';
    void shadow.offsetWidth; 
    shadow.style.animation = ''; 
}

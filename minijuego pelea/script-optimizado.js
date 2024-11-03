function partida(){
    
}
const vida_enemigo = document.getElementById('vida-enemigo');
const vida_jugador = document.getElementById('vida-jugador');
const mana_jugador = document.getElementById('mana-jugador');
// MENSAJES 
const mensajes = document.getElementById('mensajes');
// CIRCULOS DE MANA JUGADOR
const circulosMana = document.getElementById('mana-circles-container');

let jugadorSinMana = false;
//VIDA DEL ENEMIGO
let enemigoHP = 200;
//VIDA , MANA, CURACIONES Y ARMA ACTUAL DEL JUGADOR 
let jugadorHP = 100;
let jugadorMana = 10;
let curacionesRestantes = 3;
let armaActual = 'garrote';
// MANA QUE GASTAN LAS ACCIONES
const garroteMana = 3;
const pistolaMana = 5;
const cambiarArmaMana = 5;
const curacionMana = 2;
// GETS DE LOS BOTONES
const botonAtaque = document.getElementById('atacar');
const botonDefensa = document.getElementById('defender');
const botonCura = document.getElementById('curar');
const botonCambiarArma = document.getElementById('cambiar-arma');
// EVENTS DE LOS BOTONES
botonAtaque.addEventListener('click', atacar);
botonDefensa.addEventListener('click', defender);
botonCura.addEventListener('click', curacion);
botonCambiarArma.addEventListener('click', cambiarArma);
//MOSTRAR EL MANA CON LOS CIRCULOS

function actalizarCirculosMana() {
    circulosMana.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const circulo = document.createElement('div');
        circulo.classList.add('mana-circle');
        if (i >= jugadorMana) {
            circulo.classList.add('empty');
        }
        circulosMana.appendChild(circulo);
    }
}
// LLAMAR A LA FUNCION actalizarCirculosMana
actalizarCirculosMana();
// FUNCION PARA ATACAR
function atacar() {

    // VERIFICA SI EL ARMA ES EL GARROTE
    if (armaActual === 'garrote') {
        //VERIFICA SI EL MANA DEL JUGADOR ES SUFICIENTE PARA ATACAR
        if (jugadorMana >= garroteMana) {
            //ACTUALIZA EL MANA 
            jugadorMana -= garroteMana;
            //Actualiza el mana en la pantalla
            actulizarMana();
            // Guarda una probabilidad 
            const probabilidadFallida = Math.random();
            //si la probabilidad es mayor a 0.8 falla el golpe
            if (probabilidadFallida > 0.8) {
                // Muestre el mensaje de fallaste
                mostrarMensaje('¡Fallaste el ataque con el garrote!');
            } else {
                const daño = 10;
                enemigoHP -= daño;
                vida_enemigo.textContent = enemigoHP + ' HP';
                mostrarMensaje(`Atacaste al enemigo con el garrote por ${daño} HP.`);
            }
        } else {
            mostrarMensaje('No tienes suficiente maná para usar el garrote.');
            jugadorMana = 0;
        }
    } else if (armaActual === 'pistola') {
        if (jugadorMana >= pistolaMana) {
            jugadorMana -= pistolaMana;
            actulizarMana();

            const probabilidadFallida = Math.random();
            if (probabilidadFallida > 0.45) {
                mostrarMensaje('¡Fallaste el disparo con la pistola!');
            } else {
                const daño = Math.floor(Math.random() * 16) + 20; // Daño entre 20-35
                enemigoHP -= daño;
                vida_enemigo.textContent = enemigoHP + ' HP';
                mostrarMensaje(`Atacaste al enemigo con la pistola por ${daño} HP.`);
            }
        } else {
            mostrarMensaje('No tienes suficiente maná para usar la pistola.');
            jugadorMana = 0; // No tiene maná, así que el turno pasa al enemigo
        }
    }

    // Solo pasar el turno al enemigo si no hay maná restante
    if (jugadorMana <= 0) {
        setTimeout(() => {
            enemigoAtaca();
            verificarVictoria();
        }, 1000);
    }
}

function defender() {
    jugadorMana = 10;
    actulizarMana();
    mostrarMensaje('Te has defendido y tu maná se ha restablecido.');

    const ataque_enemigo = Math.floor(Math.random() * 10) + 2; // Daño reducido
    jugadorHP -= ataque_enemigo;
    vida_jugador.textContent = jugadorHP + ' HP';
    mostrarMensaje(`Recibiste ${ataque_enemigo} HP de daño al defenderte.`);

    verificarVictoria();
}

function curacion() {
    if (curacionesRestantes > 0 && jugadorHP < 100) {
        if (jugadorMana >= curacionMana) {
            jugadorMana -= curacionMana;
            actulizarMana();

            const cantCuracion = Math.floor(Math.random() * 20) + 10;
            jugadorHP += cantCuracion;
            if (jugadorHP > 100) jugadorHP = 100;
            vida_jugador.textContent = jugadorHP + ' HP';
            curacionesRestantes--;
            mostrarMensaje(`Te has curado por ${cantCuracion} HP. Curaciones restantes: ${curacionesRestantes}.`);
        } else {
            mostrarMensaje('No tienes suficiente maná para curarte.');
            // No pasa al turno del enemigo si no hay maná
            return;
        }
    } else if (curacionesRestantes === 0) {
        mostrarMensaje('No te quedan más curaciones.');
        // No pasa al turno del enemigo si no hay curaciones
        return;
    } else {
        mostrarMensaje('Ya tienes la salud completa.');
    }
    verificarVictoria();
}

function cambiarArma() {
    if (jugadorMana >= cambiarArmaMana) {
        jugadorMana -= cambiarArmaMana;
        actulizarMana();
        armaActual = armaActual === 'garrote' ? 'pistola' : 'garrote';
        mostrarMensaje(`Has cambiado a ${armaActual === 'garrote' ? 'garrote' : 'pistola'}. Maná restante: ${jugadorMana}.`);
    } else {
        mostrarMensaje('No tienes suficiente maná para cambiar de arma.');
    }
    actualizar_arma()

}

// function enemigoAtaca() {
//   if (jugadorMana <= 0) {
//     jugadorMana = 0;
//     actulizarMana();
//     mostrarMensaje('No tienes suficiente maná. El turno pasa al enemigo.');

//     // Solo pasar el turno al enemigo si no hay maná
//     const ataque_enemigo = Math.floor(Math.random() * 15) + 5;
//     jugadorHP -= ataque_enemigo;
//     vida_jugador.textContent = jugadorHP + ' HP';
//     mostrarMensaje(`El enemigo te ha atacado por ${ataque_enemigo} HP.`);

//     jugadorMana = 10; // Recuperar el maná después del turno del enemigo
//     actulizarMana();
//     verificarVictoria();
//   }
// }
let enemigoMana = 10; // Maná del enemigo
const puñoMana = 3; // Maná necesario para el ataque del puño

function enemigoAtaca() {


    let ataquesRealizados = 0;

    function realizarAtaque() {

        if (enemigoMana >= puñoMana && jugadorHP > 0) {
            enemigoMana -= puñoMana;
            const probabilidadFallida = Math.random();
            if (probabilidadFallida > 0.75) {
                mostrarMensaje('¡El enemigo falló el ataque con el puño!');
            } else {
                const ataque_enemigo = 12;
                jugadorHP -= ataque_enemigo;
                vida_jugador.textContent = jugadorHP + ' HP';
                mostrarMensaje(`El enemigo te ha atacado con su puño por ${ataque_enemigo} HP.`);
            }

            ataquesRealizados++;

            if (jugadorHP <= 0) {
                verificarVictoria();
                return; // Detener si el jugador ha sido derrotado
            }

            setTimeout(realizarAtaque, 1000); // Llamar de nuevo para el siguiente ataque
        } else {
            mostrarMensaje(`El enemigo realizó ${ataquesRealizados} ataques.`);
            enemigoMana = 10; // Restablecer el maná del enemigo
            mostrarMensaje('El enemigo ha recuperado su maná.');

            // Restablecer el maná del jugador después del turno enemigo
            jugadorMana = 10;
            actulizarMana();

            verificarVictoria();
        }
    }
    disableButtons();
    realizarAtaque();

}

function mostrarMensaje(message) {
    const mensaje_P = document.createElement('p');
    mensaje_P.textContent = message;

    mensajes.appendChild(mensaje_P);
    mensajes.scrollTop = mensajes.scrollHeight;
}
function verificarVictoria() {
    if (enemigoHP <= 0) {
        mostrarMensaje('¡Has ganado!');
        disableButtons();
    } else if (jugadorHP <= 0) {
        mostrarMensaje('¡Te ha derrotado el enemigo!');
        disableButtons();
    }
}

function disableButtons() {
    botonAtaque.disabled = true;
    botonDefensa.disabled = true;
    botonCura.disabled = true;
    botonCambiarArma.disabled = true;
}
function activeButtons() {
    botonAtaque.disabled = false;
    botonDefensa.disabled = false;
    botonCura.disabled = false;
    botonCambiarArma.disable = false;
}

function actulizarMana() {
    mana_jugador.textContent = `Maná: ${jugadorMana}`;
    actalizarCirculosMana(); // Actualizar los círculos de maná
}
//NO APICADAS PPII CPNT
function actuilizar_vida() {
    const PorcenVida = document.getElementById('barra-vida')
    PorcenVida.style.width = jugadorHP + '%'
}
function actualizar_arma() {
    if (armaActual === 'garrote') {
        botonAtaque.style.backgroundImage = "url('/minijuegoPelea - copia/img/garrote-img.svg')";
    } else {
        botonAtaque.style.backgroundImage = "url('/minijuegoPelea/img/pistola-removebg-preview.png')";
    }
}
actualizar_arma()

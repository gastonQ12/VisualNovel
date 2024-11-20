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
//obtener cuando la animacion de la variable termina

ingresarTecla(tecla);
shadow.addEventListener('animationiteration', function(event) {
    tecla = letraRandom()   
    botonTexto.textContent = tecla.toUpperCase();
    boton.style.backgroundColor = "red"
    vidaJugador = vidaJugador - 10;
    barraVidaJugador.style.background = `linear-gradient(to right, 
    #AE0909 ${vidaJugador}%, 
    white ${vidaJugador - 100}%)`;
});

//funcion para ingresar la tecla
function ingresarTecla(tecla){
    botonTexto.textContent = tecla.toUpperCase();
    document.addEventListener('keydown', function(event) {
        if(tecla == event.key){
            boton.style.backgroundColor = "green";
            vidaEnemigo = vidaEnemigo - 2;
            barraVidaEnemigo.style.background = `linear-gradient(to right, #AE0909 ${vidaEnemigo}%, white ${vidaEnemigo - 100}%)`; 
            tecla = letraRandom()   
            botonTexto.textContent = tecla.toUpperCase();
            reiniciarTimer();
        }
        else{
            
            boton.style.backgroundColor = "red"
            vidaJugador = vidaJugador - 2;
            //si el jugador muere, redireccciona a la pantalla de muerte
            if(vidaJugador<=0){
                location.href = "muerteREMASTER/Morir.html"
            }

            //sino baja la vida del jugador
            barraVidaJugador.style.background = `linear-gradient(to right, 
            #AE0909 ${vidaJugador}%, 
            white ${vidaJugador - 100}%)`;
            tecla = letraRandom();
            botonTexto.textContent = tecla.toUpperCase();
            
        }
    })
}

//funcion para generar la letra random
function letraRandom() {
    const letras = ['a', 's', 'd', 'w', 'e', 'q', 'f', 'z', 'x', 'c'];
    const indexRandom = Math.floor(Math.random() * letras.length);
    return letras[indexRandom];
}

function reiniciarTimer() {
    shadow.style.animation = 'none'; // Pausar animación
    void shadow.offsetWidth; // Forzar reflow (reinicio de estilo)
    shadow.style.animation = ''; // Volver a añadir animación CSS
}





//timer dmg
// setTimeout(function() {
// }, 2000);

// funcion para desaparecer el boton
// setTimeout(function() {
//     document.getElementById('button').style.display = 'none';
// }, 5000);

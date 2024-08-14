//declaro las variables
let tecla = letraRandom();
const boton = document.getElementById("button");
const botonTexto = document.getElementById("txt");
const barraVidaEnemigo = document.getElementById("hpChabon");
const barraVidaJugador = document.getElementById("hpJugador");
const shadow = document.querySelector('.shadow');
let vidaEnemigo = 100 ;
let vidaJugador = 100 ;
var aux = true;
txt.textContent = tecla;
//obtener cuando la animacion de la variable termina

shadow.addEventListener('animationiteration', function(event) {

    ingresarTecla(tecla);

});




//timer dmg
// setTimeout(function() {
// }, 2000);


//funcion para ingresar la tecla
function ingresarTecla(tecla){
    document.addEventListener('keydown', function(event) {
        if(tecla==event.key.toUpperCase()){
            boton.style.backgroundColor = "green" 
            vidaEnemigo = vidaEnemigo - 10;
            barraVidaEnemigo.style.background = `linear-gradient(to right, 
            #AE0909 ${vidaEnemigo}%, 
            white ${vidaEnemigo - 100}%)`;
            
        }
        else{
            boton.style.backgroundColor = "red"
            vidaJugador = vidaJugador - 10;
            barraVidaJugador.style.background = `linear-gradient(to right, 
            #AE0909 ${vidaJugador}%, 
            white ${vidaJugador - 100}%)`;
        }
    })

}

//funcion para generar la letra random
function letraRandom() {
    const letras = ['A', 'S', 'D', 'W', 'E', 'Q', 'F', 'Z', 'X', 'C'];
    const indexRandom = Math.floor(Math.random() * letras.length);
    return letras[indexRandom];



// funcion para desaparecer el boton
// setTimeout(function() {
//     document.getElementById('button').style.display = 'none';
// }, 5000);

}
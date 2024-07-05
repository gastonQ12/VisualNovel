//CODIGO PARA QUE FUNCIONE EL MODAL DE LOS CREDITOS
const abrCreditos = document.querySelector("#abrir_creditos");
const cerCreditos = document.querySelector("#cerrar_creditos");
const creditos = document.querySelector("#creditos");

window.localStorage.setItem("Dada", "HOLAAAAA");
window.localStorage.setItem('miDato', 'Hola Mundo');

abrCreditos.addEventListener("click", () => {
    creditos.showModal();
})
cerCreditos.addEventListener("click", () => {
    creditos.close();
})
//CODIGO PARA QUE FUNCIONE EL MODAL DE LQS CONFIGURACION
const abrconfiguracion = document.querySelector("#abrir_configuracion");
const cerconfiguracion = document.querySelector("#cerrar_configuracion");
const configuracion = document.querySelector("#configuracion");

abrconfiguracion.addEventListener("click", () => {
    configuracion.showModal();
    
})
cerconfiguracion.addEventListener("click", () => {
    configuracion.close();
    
})

//CODIGO PARA MOVERTE ENTRE LAS OPCIONES
var audio = new Audio();
const botones = document.querySelectorAll('.botones-menu');
const textoboton = document.querySelectorAll('.opciones');

let botonActual = 0;

function cambiar_opcion_tecla(event) {
    const key = event.key;

    if (key === 'ArrowUp' || key === 'Up') {
        botonActual = (botonActual - 1 + botones.length) % botones.length;
        botones[botonActual].focus();
        cambiarColorBoton(botonActual);
        
    } else if (key === 'ArrowDown' || key === 'Down') {
        botonActual = (botonActual + 1) % botones.length;
        botones[botonActual].focus();
        cambiarColorBoton(botonActual);

    }
}
function cambiarColorBoton(indiceBoton) {
    const botonActual = document.querySelector('.boton-actual');
    if (botonActual) {
        botonActual.classList.remove('boton-actual');
    }

    botones[indiceBoton].classList.add('boton-actual');
}

window.onload = function () {
    const botonActual = document.querySelector('.boton-actual');
    if (!botonActual) {
        cambiarColorBoton(0);
    }
};

document.addEventListener('keydown', cambiar_opcion_tecla);


//CODIGO PARA QUE EL USARIO NO PUEDA USAR EL MENU PARA ACCEDER A LA CONSOLA
document.oncontextmenu = function () { return false }

function nuevaPartida(){
    
}
/*
function cargarPartida() {
    var GuardadoCookie1 = "progresoDialogo=" + 3;
    return GuardadoCookie1;
}
*/
function cargarPartida(){
    if(localStorage.getItem("Escondite1") == 1){
        location.href = "paginas/escondite/escondite.html";
    }else{
        location.href = "paginas/Interrogatorio/index.html";
    }
}
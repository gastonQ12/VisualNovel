//CODIGO PARA QUE FUNCIONE EL MODAL DE LOS CREDITOS
const abrCreditos = document.querySelector("#abrir_creditos");
const cerCreditos = document.querySelector("#cerrar_creditos");
const creditos = document.querySelector("#creditos");

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
    let codViejo = localStorage.getItem('codigoPartidaActual');
    localStorage.clear();
    localStorage.setItem("codigoViejo", codViejo)
    location.href = "acto1/nombrePro/index.html";
}
/*
function cargarPartida() {
    var GuardadoCookie1 = "progresoDialogo=" + 3;
    return GuardadoCookie1;
}    var urlAnterior = new URL(window.location);
    var rutaAnterior = urlAnterior.pathname;
*/
if(localStorage.getItem('ub') !== null){
    localStorage.setItem('ub');
}
function cargarPartida(){
    if(localStorage.getItem('ub') !== null){
        if(localStorage.getItem("Escondite1") != 1){
            let ubicacion = localStorage.getItem('ub');
            location.href = ubicacion;
        }else{
            location.href = "acto1/escondite/escondite.html";
        }
    }else {
        location.href = "acto1/partidaNoguardada/partidaN.html"
    }
}
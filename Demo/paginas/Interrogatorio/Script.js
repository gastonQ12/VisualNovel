// import { cargarPartida } from '../../script.js';
let aux = 0;

const partidaA = localStorage.getItem('codigoPartidaActual');
const partidaAnti = localStorage.getItem('codigoPartida');

document.body.onload = function () {
    var paginaAnterior = document.referrer;
    var valorPC = 1;
    if (partidaA !== partidaAnti) {
        if (valorPC == 1) {
            eliminarCookie("progresoDialogo");
            eliminarCookie("boxD");
            eliminarCookie("estadoNPCs");
            eliminarCookie("estadoPJs");
            eliminarCookie("fondo");
            eliminarCookie("opacidadP1");
            eliminarCookie("opacidadPBasurero");
            eliminarCookie("opacidadPCadaver");
            eliminarCookie("opacidadPRadio");
            eliminarCookie("opacidadPTaxi");
            eliminarCookie("pistas");
            eliminarCookie("pjHablando");
            console.log("cookie eliminada");
            valorPC++;
        }
        if (paginaAnterior == "http://127.0.0.1:5500/index.html") {
            eliminarCookie("progresoDialogo");
            eliminarCookie("boxD");
            eliminarCookie("estadoNPCs");
            eliminarCookie("estadoPJs");
            eliminarCookie("fondo");
            eliminarCookie("opacidadP1");
            eliminarCookie("opacidadPBasurero");
            eliminarCookie("opacidadPCadaver");
            eliminarCookie("opacidadPRadio");
            eliminarCookie("opacidadPTaxi");
            eliminarCookie("pistas");
            eliminarCookie("pjHablando");

            var cookieGuardadaDM = cargarPartida();
            console.log(cookieGuardadaDM);
        }

    }


    var urlAnterior = new URL(window.location);
    var rutaAnterior = urlAnterior.pathname;
    localStorage.removeItem('ub');
    localStorage.setItem('ub', rutaAnterior);

    function eliminarCookie(nombre) {
        document.cookie = nombre + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }

    var leer = getCookie("progresoDialogo");
    if (leer !== "") {
        aux = parseInt(leer) - 1;
        mostrarDialogos(aux); // Mostrar el diálogo guardado

    }

    var pjHablandoS = getCookie("pjHablando");
    var imagen = document.getElementById('izquierda');
    imagen.src = pjHablandoS;
    imagen.addEventListener('click', imagen.onload);

    let estadoPJs = document.getElementById("izquierda");
    var estadoPJsC = getCookie("estadoPJs");
    estadoPJs.style.display = estadoPJsC;


    let estadoNPC = document.getElementById("derecha");
    var estadoNPCs = getCookie("estadoPJs");
    estadoNPC.style.display = 'estadoNPCs';

    pista2.style.opacity = localStorage.getItem('opacidadPBasurero');
    pista3.style.opacity = localStorage.getItem('opacidadPTaxi');
    pista4.style.opacity = localStorage.getItem('opacidadPCadaver');
    pista5.style.opacity = localStorage.getItem('opacidadPRadio');
    pista1.style.opacity = localStorage.getItem('OpacidadP1');
    determinarPE();
    cambiarColorLabel();
    determinarPersonajeExistente();
    /*
        var arrayConvertido = localStorage.getItem('EdgardM');
        var nuevoArray = JSON.parse(arrayConvertido);
    
        for(let i = 0; i < nuevoArray.length; i++){
    
            let subArray = nuevoArray[i];
            for(let s = 0; s < subArray[i]; s++)
            if(subArray[s].EdgardM[0] === true){
              
                document.getElementById("LP1Si").style.backgroundColor="green";
                document.getElementById("LP1No").style.backgroundColor="grey";
            }else{
                document.getElementById("LP1No").style.backgroundColor="Red";
                document.getElementById("LP1Si").style.backgroundColor="grey";
            
            }
        }
        */
}

var derecha = document.getElementById('derS');
var izquierda = document.getElementById('izqS');

var hoja = document.querySelector(".Sospechososs");

derecha.addEventListener("click", moverDer);
izquierda.addEventListener("click", moverIzq);

function moverDer(event) {
    hoja.scrollLeft += 150;
}

// document.getElementById('P1').textContent = localStorage.getItem("opacidadP1").key;

function determinarPE() {
    for (let i = 0; i < 4; i++) {
        if (localStorage.getItem("OpacidadP1") !== null) {
            var contP1 = document.getElementById('contP1_' + (i + 1)).style.opacity = 100 + "%";
        } else {
            document.getElementById('contP1_' + (i + 1)).style.opacity = 0 + "%";
        }
        if (localStorage.getItem("opacidadPCadaver") != null) {
            document.getElementById('contP2_' + (i + 1)).style.opacity = 100 + "%";
        } else {
            document.getElementById('contP1_' + (i + 1)).style.opacity = 0 + "%";
        }
        if (localStorage.getItem("opacidadPBasurero") !== null) {
            document.getElementById('contP3_' + (i + 1)).style.opacity = 100 + "%";
        } else {
            document.getElementById('contP3_' + (i + 1)).style.opacity = 0 + "%";
        }
        if (localStorage.getItem("opacidadPTaxi") !== null) {
            document.getElementById('contP4_' + (i + 1)).style.opacity = 100 + "%";
        } else {
            document.getElementById('contP4_' + (i + 1)).style.opacity = 0 + "%";
        }
        if (localStorage.getItem("opacidadPRadio") !== null) {
            document.getElementById('contP5_' + (i + 1)).style.opacity = 100 + "%";
        } else {
            document.getElementById('contP5_' + (i + 1)).style.opacity = 0 + "%";

        }
    }

}

function determinarPersonajeExistente() {
    for (let i = 0; i < 4; i++) {
        if (localStorage.getItem("Sophie") !== null) {
            var contP1 = document.getElementById('sophie').style.opacity = 100 + "%";
        } else {
            document.getElementById('sophie').style.display = 'none';
        }
        if (localStorage.getItem("Henry") != null) {
            document.getElementById('henry').style.opacity = 100 + "%";
        } else {
            document.getElementById('henry').style.display = 'none';
        }
        if (localStorage.getItem("Edgar") !== null) {
            document.getElementById('edgar').style.opacity = 100 + "%";
        } else {
            document.getElementById('edgar').style.display = 'none';
        }
        if (localStorage.getItem("Richard") !== null) {
            document.getElementById('richard').style.opacity = 100 + "%";
        } else {
            document.getElementById('richard').style.display = 'none';
        }
    }
}

function moverIzq(event) {
    hoja.scrollLeft += -150;
}
var protagonista = localStorage.getItem('NombrePJ');
const dialogos = [
    '  3 de febrero de 1910 a las 12:45 AM, Londres.',
    '1. Buenas noches señora Petterson, soy el detective ' + protagonista + ', ¿Tiene un minuto?',
    '2. Claro, adelante... pase. ' + mostrarSophie(),
    '2. Entonces, ¿Que sucede detective?',
    '1. Sera mejor que tome asiento, la noticia puede ser muy fuerte.',
    '2. Esta bien, acompañeme. ',
    '1. Bueno, señora Petterson, lamento informarle que su esposo, el señor Petterson',
    '1. Debo informarle que su esposo, el Señor Petterson, lamentablemente fallecio hace pocas horas',
    '2. Oh... ¿Cuando...? ¿Como?, lo vi hace apenas unas horas...',
    '1. Murio en un callejon a pocas cuadras, la teoria es que fue emboscado, ¿Sabe de algun sujeto que le guarde rencor?',
    '2. Ah... no, el no era una mala persona o una que buscara conflictos innecesarios, era tierno, comprensivo y amoroso...',
    '1. ¿Algo que deba contarnos sobre su intimidad?',
    '2. ¿Que insinua detective?',
    '1. Necesito saber si hubo alguien fuera del matrimonio que podria tener celos, algun amante resentido.',
    '2. No detective, no ofenda nuestro matrimonio puro, eramos el uno para el otro',
    '1. Bueno... necesito saber si reconoce este simbolo',
    '2. Emh... no, no que yo sepa, mis disculpas',
    '1. ¿Y esta corbata?',
    '2. Tampoco, no es ninguna de las corbatas de Michael',
    '1. Umh... Disculpeme, ¿Podria traer un poco de agua o algo para beber?',
    '2. Claro.',
    '1.',
    '1.',
    '1.'

]; //  dialogos (Lau: Haganlo prolijo si agregan mas dialgos, asi no nos mareamos.)

const nombrePj = [protagonista, "Sophie Petterson"];                            // nombre de los personajes
let size = dialogos.length; //tamaño de la lista de dialogos
var boxD = document.getElementById('cuadroDialogo');

boxD.addEventListener('click', editarTexto);
function editarTexto(event) {
    if (aux <= size - 1) {
        //ocultar los botones 
        document.getElementById("botonOpcion").setAttribute('hidden', '');
        document.getElementById("botonOpcion2").setAttribute('hidden', '');
        //mostrar dialogos
        mostrarDialogos(aux);
        aux++
        boxD.addEventListener('click', crearCookies(aux));
        libretaAnotarComentarios(aux);
        esconditeEvento(aux);

    }
    else {
        //mostrar botones y desactivar el dialogo
        var op1 = document.getElementById("botonOpcion").removeAttribute("hidden");
        var op2 = document.getElementById("botonOpcion2").removeAttribute("hidden");

    }
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return unescape(c.substring(name.length, c.length));

    }
    return "";
}

function crearCookies(aux) {
    document.cookie = "progresoDialogo=" + aux;
}

function libretaAnotarComentarios(aux) {
    let pista1 = document.getElementById("pista1");
    if (aux == 27) {
        var opacidad = 100 + "%";
        pista1.style.opacity = opacidad;
        document.cookie = "OpacidadP1=" + opacidad; //guardado de cookies, no tocar -Lau
    }

    document.getElementById("botonOpcion2").addEventListener("click", function () {
        //aca una pista luego de un click  
    });

}

function mostrarSophie() {
    localStorage.setItem("Sophie", true);
    determinarPersonajeExistente();
}

function mostrarDialogos(auxiliar) {

    //extrae la posicion del personaje
    let pjHablando = dialogos[auxiliar].substring(0, 1) - 1;
    // console.log(pjHablando);

    // console.log(auxiliar);

    //muestra el nombre, barrita y el dialogo
    document.getElementById("LineaDialogo").removeAttribute("hidden");
    document.getElementById("PJname").textContent = nombrePj[pjHablando];

    document.getElementById("output").textContent = dialogos[aux].substring(2);
    MostrarPjH(parseInt(pjHablando));
    cambiarSrc(parseInt(pjHablando));
    pjOcultos(parseInt(pjHablando));


}

function cambiarSrc(auxs) {
    var imagen = document.getElementById('izquierda');
    switch (auxs) {
        case 1:
            imagen.src = 'imagenes/SophieInd.png';
            imagen.addEventListener('click', imagen.onload);
            document.cookie = "pjHablando=" + 'imagenes/SophieInd.png';
        /* 
         if(aux >= 4 ){
             imagen.src = 'imagenes/SophieTriste.jpg';
             imagen.addEventListener('click', imagen.onload);
             document.cookie = "pjHablando=" + 'imagenes/SophieTriste.jpg';
         }
         break;
         */
    }
}
function pjOcultos(aux) {
    var imagenOtroPJ = document.getElementById('izquierda');
    var imagenProtagonista = document.getElementById('derecha');
    switch (aux) {
        case -1:
            imagenProtagonista.style.display = 'none';
            imagenOtroPJ.style.display = 'none';
            document.cookie = "estadoPJs=" + 'none';
            document.cookie = "estadoNPCs=" + 'none';
            break;
        case 0:
            imagenProtagonista.style.display = 'flex';
            imagenOtroPJ.style.display = 'flex';
            document.cookie = "estadoPJs=" + 'flex';
            document.cookie = "estadoNPCs=" + 'flex';
            break;
        case 1:
            imagenProtagonista.style.display = 'flex';
            imagenOtroPJ.style.display = 'flex';
            document.cookie = "estadoPJs=" + 'flex';
            document.cookie = "estadoNPCs=" + 'flex';
            break;
        case 2:
            imagenProtagonista.style.display = 'flex';
            imagenOtroPJ.style.display = 'flex';
            document.cookie = "estadoPJs=" + 'flex';
            break;
    }
}
/*
function cambiarFondo(aux) {
    var fondo = document.getElementById('body');
    switch (aux) {
        case 0:
            var fondoGuardado = 'url(imagenes/intro1.png)'
            fondo.style.backgroundImage = fondoGuardado;
            document.cookie = "fondo=" + fondoGuardado; //guardado de cookies, no tocar -Lau
            break;
        case 2:
            var fondoGuardado = 'url(imagenes/intro2.png)'
            fondo.style.backgroundImage = fondoGuardado;
            document.cookie = "fondo=" + fondoGuardado; //guardado de cookies, no tocar -Lau
            break;

        case 10:
            var fondoGuardado = 'url(imagenes/fondocrimen.png)'
            fondo.style.backgroundImage = fondoGuardado;
            document.cookie = "fondo=" + fondoGuardado; //guardado de cookies, no tocar -Lau
            break;
    }
}
*/
function MostrarPjH(lado) {

    switch (lado) {
        case 0:
            console.log("entro 0");
            document.getElementById("izquierda").style.filter = "brightness(20%)";
            document.getElementById("derecha").style.filter = "brightness(100%)";

            document.getElementById("izquierda").style.zIndex = "1";
            document.getElementById("derecha").style.zIndex = "0";
            break;
        case 1:
            console.log("entro 1");
            document.getElementById("izquierda").style.filter = "brightness(100%)";
            document.getElementById("derecha").style.filter = "brightness(20%)";

            document.getElementById("izquierda").style.zIndex = "0";
            document.getElementById("derecha").style.zIndex = "1";
            break;
        case 2:
            console.log("entro 2");
            document.getElementById("izquierda").style.filter = "brightness(100%)";
            document.getElementById("derecha").style.filter = "brightness(20%)";

            document.getElementById("izquierda").style.zIndex = "0";
            document.getElementById("derecha").style.zIndex = "1";
            break;
    }

    const pagina = document.querySelectorAll('.pagina');
    let numeroPagina = 0;
    function mostrarPagina(index) {
        pagina.forEach((pagina) => {
            pagina.classList.remove('active');
        })
        pagina[index].classList.add('active');
    }
    function cambioPaginaT(event) {
        if (event.key === 'ArrowRight') {
            numeroPagina = (numeroPagina + 1) % pagina.length;
            mostrarPagina(numeroPagina);
        } else if (event.key === 'ArrowLeft') {
            numeroPagina = (numeroPagina - 1 + pagina.length) % pagina.length;
            mostrarPagina(numeroPagina);
        }
    }
    document.addEventListener('keydown', cambioPaginaT);
}


function cambiarColorLabel() {
    var arrayConvertido = localStorage.getItem('Sospechosos');
    var nuevoArray = JSON.parse(arrayConvertido);

    for (let i = 0; i <= nuevoArray.length; i++) {
        var ind = nuevoArray[i];
        if (Array.isArray(ind)) {
            for (let g = 0; g <= ind.length; g++) {
                if (ind[g] === true) {
                    document.getElementById('LP' + (g + 1) + 'Si_' + (i + 1)).style.backgroundColor = "green";
                    document.getElementById('LP' + (g + 1) + 'No_' + (i + 1)).style.backgroundColor = "grey";
                } else if (ind[g] === false) {
                    document.getElementById('LP' + (g + 1) + 'No_' + (i + 1)).style.backgroundColor = "Red";
                    document.getElementById('LP' + (g + 1) + 'Si_' + (i + 1)).style.backgroundColor = "gray";
                } else if (ind[g] === null) {
                    document.getElementById('LP' + (g + 1) + 'No_' + (i + 1)).style.backgroundColor = "gray";
                    document.getElementById('LP' + (g + 1) + 'Si_' + (i + 1)).style.backgroundColor = "gray";
                }
            }
        }


    }
}

function updateStatus() {
    var arrayConvertido = localStorage.getItem('Sospechosos');
    var nuevoArray = JSON.parse(arrayConvertido);

    for (let i = 0; i < nuevoArray.length; i++) {
        var ind = nuevoArray[i];

        if (Array.isArray(ind)) {
            for (let g = 0; g < ind.length; g++) {
                let marcarEdgardP1Si = document.getElementById('P' + (g + 1) + 'Si_' + (i + 1));
                let marcarEdgardP1No = document.getElementById('P' + (g + 1) + 'No_' + (i + 1));
                if (marcarEdgardP1Si && marcarEdgardP1Si.checked) {
                    ind[g] = true;
                }
                else if (marcarEdgardP1No && marcarEdgardP1No.checked) {
                    ind[g] = false
                }
            }
        }

        localStorage.setItem('Sospechosos', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
}
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateStatus);
});


/* Esconderse */
function esconditeEvento(aux) {
    if (aux == 22) {
        sacarTodo();
        esconderse();
        clearInterval(relojTodoTiempo);
    }
    function sacarTodo() {
        let audioTic = document.getElementById('audioTic');
        audioTic.play();
        let iconosE = document.getElementById('iconosE');
        let reloj = document.getElementById('reloj');
        let cuadroDialogo = document.getElementById('cuadroDialogo');
        let imgPjs = document.getElementById('imagenesPJ');
        imgPjs.style.display = 'none';
        cuadroDialogo.style.display = 'none';
        iconosE.style.display = 'block';

        reloj.style.display = 'block';
    }
    function ponerTodo() {
        let iconosE = document.getElementById('iconosE');
        let reloj = document.getElementById('reloj');
        let cuadroDialogo = document.getElementById('cuadroDialogo');
        cuadroDialogo.style.display = 'flex';
        iconosE.style.display = 'block';
        reloj.style.display = 'block';
    }
    function esconderse() {
        var cama = document.getElementById("escondite2");
        var cortinas = document.getElementById("escondite1");
        var balcon = document.getElementById("escondite3");
        var reloj = document.getElementById("reloj");
        var probabilidadSalvarse = 0;

        var bajar = 360;

        localStorage.setItem("Escondite1", 1);

        const intervalo = setInterval(() => {
            reloj.style.background = `conic-gradient(red ${bajar}deg, white ${bajar}deg)`;
            bajar -= 9;
            if (bajar <= 0) {
                clearInterval(intervalo);
            }
            console.log(bajar);
            if (bajar == 0) {
                volver();
            }
        }, 800
        );

        cama.addEventListener('click', function () {
            var probabilidadSalvarse = 75;

            salvado(probabilidadSalvarse);
        });

        cortinas.addEventListener('click', function () {
            var probabilidadSalvarse = 40;

            salvado(probabilidadSalvarse);
        });

        balcon.addEventListener('click', function () {
            var probabilidadSalvarse = 86;

            salvado(probabilidadSalvarse);
        });
    }

    function volver(event) {
        document.location.href = "../../Pantalla Muerte/index.html";
    }

    function salvado(probabilidad) {
        var random = Math.floor(Math.random() * (100 - 10 + 1) + 10);
        console.log("Random" + random);
        console.log("Probabilidad" + probabilidad);
        if (probabilidad <= random) {
            alert("No te salvaste");
        } else {
            alert("te salvaste");
            localStorage.removeItem("Escondite1");
        }
    }
}

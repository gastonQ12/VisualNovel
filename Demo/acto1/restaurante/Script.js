// import { cargarPartida } from '../../script.js';
let aux = 0;

const partidaA = localStorage.getItem('codigoPartidaActual');
const partidaAnti = localStorage.getItem('codigoViejo');
document.body.onload = function () {
    var paginaAnterior = document.referrer;
    
        if (partidaA !== partidaAnti && localStorage.getItem("borrado1") == "false") {
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
                localStorage.removeItem("borrado1");
                localStorage.setItem("borrado1", true)

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

    if(localStorage.getItem('partidasGuardadasLista') == null){
        localStorage.setItem('partidasGuardadasLista', "[]");
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
mostrarHenry();

const dialogos = [
    '  4 de febrero de 1910 a las 7:30 AM, Londres.',
    '1. Buenas noches señor, soy el detective ' + protagonista + ', ¿Tiene un minuto?',
    '2. Claro, dejeme avisar al personal de que estare ocupado ',
    '2. Entonces, ¿Que sucede detective?',
    '1. ¿Conoce a Michael Hawks?',
    '2. Si, fuimos amigos desde pequeños',
    '1. Lastimosamente fue asesinado, fuimos a su casa para investigar y preguntarle a sus conocidos',
    '2. Disculpe... me impacta la noticia.. ¿Cuando fallecio?',
    '1. Hace unas horas, cerca de la media noche',
    '2. Entiendo... No puedo creerlo. Michael... ¿Sabe quién pudo haber hecho algo así?',
    '1. Aún no tenemos toda la información, pero por eso estamos aquí. Queremos saber un poco más sobre sus últimos días. ¿Sabe si Michael tenía enemigos o si estaba en alguna situación peligrosa?',
    '2. Bueno... Michael era reservado, pero últimamente lo notaba preocupado. Me comentó algo sobre unos problemas con un conocido... un hombre al que le debía dinero.',
    '1. ¿Recuerda el nombre de ese hombre?',
    '2. No lo mencionó, pero sé que lo veía en un club del centro... un sitio poco recomendable, para ser sincero.',
    '1. Perfecto, eso nos es útil. Una última pregunta: ¿Dónde estuvo usted anoche, alrededor de la medianoche?',
    '2. Bueno... estaba en mi oficina, sí... pero... en algún momento salí, más tarde de lo habitual, para ver a... alguien.',
    '1. ¿Alguien? ¿Se refiere a alguien en particular?',
    '2. Una amiga... ya sabe.',
    '1. Entiendo. Debe comprender que esto complica las cosas. Su relación y el momento en el que se encontraba fuera de su oficina anoche no le dan una coartada sólida.',
    '2. Lo sé, detective... pero no tuve nada que ver con esto. Solo... me vi con ella porque ambos necesitábamos hablar.',
    '1. ¿Ella puede confirmar esto?',
    '2. Bueno... si pero no se quien era exactamente, un encuentro casual, ya sabe.',
    '1. Bueno, que tenga un buen dia.',
]; //  dialogos (Lau: Haganlo prolijo si agregan mas dialgos, asi no nos mareamos.)

const nombrePj = [protagonista, "Henry Whalls"];                            // nombre de los personajes
let size = dialogos.length; //tamaño de la lista de dialogos
var boxD = document.getElementById('cuadroDialogo');
var fondo = getCookie("fondo");
body.style.backgroundImage = fondo;
boxD.addEventListener('click', editarTexto);
function editarTexto(event) {
    if (aux <= size - 1) {
        //ocultar los botones 
        document.getElementById("botonOpcion").setAttribute('hidden', '');
        document.getElementById("botonOpcion2").setAttribute('hidden', '');
        //mostrar dialogos
        mostrarDialogos(aux);
        cambiarFondo(aux);
        mostrarPistas(aux)
        //opcionesPreguntar(aux);
        aux++
        boxD.addEventListener('click', crearCookies(aux));
        libretaAnotarComentarios(aux);
       // esconditeEvento(aux);
        console.log(aux)
        if(aux === 23){
            localStorage.setItem('Restaurante', 'Terminado');
            localStorage.setItem('casaAmigo', 'true');
            location.href = '../Mapa/Mapa.html';
        }
    }
    else {
        //mostrar botones y desactivar el dialogo
        var op1 = document.getElementById("botonOpcion").removeAttribute("hidden");
        var op2 = document.getElementById("botonOpcion2").removeAttribute("hidden");

    }
}
function opcionesPreguntar(aux){
    if(aux === 22){
        console.log(aux);
        const opcionesPreguntar = document.getElementById('opcionesPreguntar').style.display = "flex"; 
        const botonOpcion2 = document.getElementById('botonOpcion2');
        const botonOpcion1 = document.getElementById('botonOpcion');

        const parrafoDentroDelBoton = botonOpcion2.querySelector('p');
        const parrafoDentroDelBoton1 = botonOpcion1.querySelector('p');

        parrafoDentroDelBoton.innerHTML = '¿Quien es el hombre que esta en el cuadro?';
        parrafoDentroDelBoton1.innerHTML = '¿Que sabe de aquel libro?';
        // Añade eventos de clic para actualizar el diálogo y continuar
        botonOpcion2.addEventListener("click", function(){
            dialogos[24] = '2. Es un amigo de mi esposo, se llama Matthew y trabaja en el restaurante en Maplewood Lane 421';
            dialogos[25] = '1. ¿Eran muy cercanos entre si?'
            dialogos[26] = '2. Si, eran muy cercanos.'
            dialogos[27] = '1. ¿Y usted lo conocia?'
            dialogos[28] = '2. Si, me lo presento Michael el año pasado'
            dialogos[29] = '1. ¿Como se relacionaban ustedes dos?'
            dialogos[30] = '2. Emh... era solo un amigo, lo tipico.',
            dialogos[31] = '2. Bueno... creo que ya es hora de que se vaya detective'
            dialogos[32] = '1. Aun me gustaria hacerle mas preguntas si es posible'
            dialogos[33] = '2. No puedo, lo siento, debo procesar todo lo sucedido.'
            aux++;  
            editarTexto();  
        });

        botonOpcion1.addEventListener("click", function(){
            dialogos[24] = '2. En realidad nada, es de mi marido';
            dialogos[25] = '1. ¿Sabe donde obtuvo el libro?';
            dialogos[26] = '2. Lo compro un dia cualquiera, creo que casi no lo leyo, ¿Por que?';
            dialogos[27] = '1. ¿Usted lo leyó?';
            dialogos[28] = '2. No, ni lo toque';
            dialogos[29] = '1. ¿Y que me dice del sujeto junto a su esposo en el cuadro aquel?';
            dialogos[30] = '2. No lo conozco... creo que es un amigo de Michael que trabaja en un restaurante en Maplewood Lane 421';
            dialogos[31] = '1. ¿Segura que no lo conoce?';
            dialogos[32] = '2. No detective, ahora si me disculpa, tengo que procesar el duelo.';
            dialogos[33] = '1. Claro, no la molesto.';
            aux++;  
            editarTexto();  
        });
    } else {
        document.getElementById('opcionesPreguntar').style.display = "none"; 
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

function mostrarHenry() {
    localStorage.setItem("Henry", true);
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
            imagen.src = 'imagenes/henryImg.png';
            imagen.addEventListener('click', imagen.onload);
            document.cookie = "pjHablando=" + 'imagenes/henryImg.png';
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

function cambiarFondo(aux) {
    var fondo = document.getElementById('body');
    switch (aux) {
        case 0:
            var fondoGuardado = 'url(imagenes/restaurante.png)'
            fondo.style.backgroundImage = fondoGuardado;
            document.cookie = "fondo=" + fondoGuardado; //guardado de cookies, no tocar -Lau
            break;
        case 3:
            var fondoGuardado = 'url(imagenes/restPuerta.jpg)'
            fondo.style.backgroundImage = fondoGuardado;
            document.cookie = "fondo=" + fondoGuardado; //guardado de cookies, no tocar -Lau
            break;
    }
}

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
        pistas(aux);
        clearInterval(relojTodoTiempo);
    }
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
    let imgPjs = document.getElementById('imagenesPJ');
    imgPjs.style.display = 'block';
    cuadroDialogo.style.display = 'flex';
    iconosE.style.display = 'block';
    reloj.style.display = 'none';
    let audioTic = document.getElementById('audioTic');
    audioTic.pause()
}
function pistas(aux) {
    var cuadro = document.getElementById("cuadro");
    var libroLetras = document.getElementById("libroLetras");
    var reloj = document.getElementById("reloj");

    var bajar = 360;

    const intervalo = setInterval(() => {
        reloj.style.background = `conic-gradient(red ${bajar}deg, white ${bajar}deg)`;
        bajar -= 9;
        console.log(bajar)
        if (bajar <= 0) {
            clearInterval(intervalo)
            ponerTodo();
            
        }
    }, 100
    );

}

function getAllCookies() {
    var urlAnterior = new URL(window.location);
    var rutaAnterior = urlAnterior.pathname;
    const cookies = document.cookie.split("; ");
    const cookieObj = {
        ubicacion: rutaAnterior
    };
    
    cookies.forEach(cookie => {
      const [name, value] = cookie.split("=");
      cookieObj[name] = value;
    });
  
    return cookieObj;
  }
/*
setInterval(() => {
    pActualActualizacion(listaPartidasGS);
}, 5000);

function pActualActualizacion(partidaPP) {
    var urlAnterior = new URL(window.location);
    var rutaAnterior = urlAnterior.pathname;

    for (let i = 0; i < partidaPP.length; i++) {
        if (partidaPP[i].partida == localStorage.getItem('codigoPartidaActual')) {

            for (let k = 0; k < localStorage.length; k++) {
                const key = localStorage.key(k); 
                const value = localStorage.getItem(key); 
                partidaPP[i].DatosPartida[key] = value;
            }

            const todasCookies = getAllCookies();

            let cookieIndex = partidaPP[i].Cookies.findIndex(cookie => cookie.todasCookies.ubicacion === rutaAnterior);

            if (cookieIndex !== -1) {
                partidaPP[i].Cookies[cookieIndex] = { todasCookies };
            } else {
                partidaPP[i].Cookies.push({ todasCookies });
            }
        }
    }
    localStorage.removeItem('partidasGuardadasLista')
    localStorage.setItem('partidasGuardadasLista', JSON.stringify(partidaPP));
}
*/
function mostrarPistas(aux){
    if(aux == 22){
        document.getElementById('iconosE').style.display = "block";
    }
}

if(localStorage.getItem('Restaurante') == 100 || localStorage.getItem('Restaurante') == "Terminado"){
    document.getElementById("pista6").style.display = "Block";
}
if(localStorage.getItem('letras') == 100){
    document.getElementById("pista7").style.display = "Block";
}
document.getElementById("cuadro").addEventListener("click", aparecerPista6)
function aparecerPista6(){
    console.log("entra")
    document.getElementById("pista6").style.display = "Block";
    localStorage.setItem('Restaurante', 100);
}

document.getElementById("libroLetras").addEventListener("click", function(){
    document.getElementById("pista7").style.display = "Block";
    localStorage.setItem('letras', 100);

})
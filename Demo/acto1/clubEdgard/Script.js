// import { cargarPartida } from '../../script.js';
let aux = 0;

const partidaA = localStorage.getItem('codigoPartidaActual');
const partidaAnti = localStorage.getItem('codigoViejo');

document.body.onload = function () {
    var paginaAnterior = document.referrer;
    var paginaAnteriorURL = new URL(document.referrer).pathname;
    console.log(paginaAnterior)
    if (partidaA !== partidaAnti && localStorage.getItem("borrado2") == "false") {
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
        localStorage.removeItem("borrado2");
        localStorage.setItem("borrado2", true)

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

    if (localStorage.getItem('partidasGuardadasLista') == null) {
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
cargadoDePIstas();
function cargadoDePIstas() {
    if (localStorage.getItem('OpacidadP1') == 100) {
        document.getElementById("pista1").style.display = "Block";
    } else {
        document.getElementById("pista1").style.display = "none";
    }

    if (localStorage.getItem('opacidadPBasurero') == 100) {
        document.getElementById("pista2").style.display = "Block";
    } else {
        document.getElementById("pista2").style.display = "none";
    }

    if (localStorage.getItem('opacidadPTaxi') == 100) {
        document.getElementById("pista3").style.display = "Block";
    } else {
        document.getElementById("pista3").style.display = "none";
    }

    if (localStorage.getItem('opacidadPCadaver') == 100) {
        document.getElementById("pista4").style.display = "Block";
    } else {
        document.getElementById("pista4").style.display = "none";
    }

    if (localStorage.getItem('opacidadPRadio') == 100) {
        document.getElementById("pista5").style.display = "Block";
    } else {
        document.getElementById("pista5").style.display = "none";
    }

    if (localStorage.getItem('Restaurante') == 100 || localStorage.getItem('Restaurante') == 'Terminado') {
        document.getElementById("pista6").style.display = "Block";
    } else {
        document.getElementById("pista6").style.display = "none";
    }
    if (localStorage.getItem('letras') == 100) {
        document.getElementById("pista7").style.display = "Block";
    } else {
        document.getElementById("pista7").style.display = "none";
    }

    if (localStorage.getItem('pistaCorbataHenry') == 100) {
        document.getElementById("pista8").style.display = "Block";
    } else {
        document.getElementById("pista8").style.display = "none";
    }

    if (localStorage.getItem('pistaBoletos') == 100) {
        document.getElementById("pista9").style.display = "Block";
    } else {
        document.getElementById("pista9").style.display = "none";
    }

    if (localStorage.getItem('pistaCarta') == 100) {
        document.getElementById("pista10").style.display = "Block";
    } else {
        document.getElementById("pista10").style.display = "none";
    }

    /* tercera */
    if (localStorage.getItem('RadioPropietario') == 100) {
        document.getElementById("pista11").style.display = "Block";
    } else {
        document.getElementById("pista11").style.display = "none";
    }
    if (localStorage.getItem('EdgardSocio') == 100) {
        document.getElementById("pista12").style.display = "Block";
    } else {
        document.getElementById("pista12").style.display = "none";
    }

    if (localStorage.getItem('edgardCoartada') == 100) {
        document.getElementById("pista13").style.display = "Block";
    } else {
        document.getElementById("pista13").style.display = "none";
    }

    if (localStorage.getItem('edgardConoceLetras') == 100) {
        document.getElementById("pista14").style.display = "Block";
    } else {
        document.getElementById("pista14").style.display = "none";
    }
    /*
    if(localStorage.getItem('librePorahora') == 100){
        document.getElementById("pista15").style.display = "Block";
    }else{
        document.getElementById("pista15").style.display = "none";
    }
    */
}

function ganadorPeleaKarma() {
    let karmaAct = parseInt(localStorage.getItem('karma'))
    alert("Las peleas que puedes evitar te generan Karma")
    karmaAct += 20
    localStorage.setItem('karma', karmaAct)
    document.getElementById("rojo").style.width = localStorage.getItem('karma') + "%"
}
document.getElementById("rojo").style.width = localStorage.getItem('karma') + "%"

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
    '  4 de febrero de 1910 a las 8:30 AM, Londres.',
    '1. Buenas noches señor, ¿Es Edgard Mindguard?',
    '2. ¿Quien diablos pregunta?',
    '1. Soy el detective ' + protagonista,
    '2. ¿Que mierda quieres?',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]; //  dialogos (Lau: Haganlo prolijo si agregan mas dialgos, asi no nos mareamos.)


const nombrePj = [protagonista, "Edgard Mindguard"];                            // nombre de los personajes
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
        opcionesPreguntar(aux);
        aux++
        if (aux == 16 && localStorage.getItem("GanadorPelea") === "false") {
            location.href = "../minijuego pelea/index.html";
        }
        if (localStorage.getItem("GanadorPelea") === "true") {
            ganadorPeleaKarma();
            localStorage.setItem("GanadorPelea", "false");
        }
        if (aux == 24) {
            console.log("guardad")
            localStorage.setItem('RadioPropietario', 100);
        } else if (aux == 26) {
            console.log("guardad")
            localStorage.setItem('edgardCoartada', 100);
        } else if (aux == 20) {
            console.log("guardad")
            localStorage.setItem('edgardConoceLetras', 100);
        } else if (aux == 17) {
            console.log("guardad")
            localStorage.setItem('EdgardSocio', 100);
        }else if(aux == 27){
            localStorage.setItem('clubEdgard', "Terminado")
            location.href = '../Mapa/Mapa.html';
        }
        boxD.addEventListener('click', crearCookies(aux));
        libretaAnotarComentarios(aux);
        // esconditeEvento(aux);
        console.log(aux)
        //terminado Ir mapa
        /* if (aux === 23) {
             localStorage.setItem('clubRichard', true)
             localStorage.setItem('Restaurante', 'Terminado');
             localStorage.setItem('casaAmigo', 'true');
             location.href = '../Mapa/Mapa.html';
         } */
    }
    else {
        //mostrar botones y desactivar el dialogo
        var op1 = document.getElementById("botonOpcion").removeAttribute("hidden");
        var op2 = document.getElementById("botonOpcion2").removeAttribute("hidden");

    }
}


caminoElegido()
function caminoElegido() {
    if (localStorage.getItem("caminoPelear") === "true") {
        console.log("entra")
        dialogos[5] = '2. No le incumbe, mejor váyase, ya estoy teniendo un mal día.';
        dialogos[6] = '1. Señor, insisto en que me conteste o tendrá serios problemas.';
        dialogos[7] = '2. Demonios, eres una molestia, por una estúpida deuda.';
        dialogos[8] = '1. Edgard Mindguard, ¿dónde estuvo hace unas 8 horas?';
        dialogos[9] = '2. No lo sé, tal vez durmiendo o bebiendo algo, ¿qué le importa a usted?';
        dialogos[10] = '1. ¿Qué sabe de Michael Hawks?';
        dialogos[11] = '2. Ese pedazo de mierda, me debe dinero y discutí con él ayer.';
        dialogos[12] = '1. Bueno, ahora está muerto y usted deberá acompañarme a la comisaría. Ponga las manos sobre el mostrador.';
        dialogos[13] = '2. ¿Qué dice? Yo no lo maté, déjeme en paz, no pienso ir a ningún lado.';
        dialogos[14] = '1. No le recomiendo resistirse al arresto, señor, solo será más doloroso.';
        dialogos[15] = '1. Bueno... actualmente es sospechoso. ¿Podría decirme hasta qué hora estuvo con él?';
        dialogos[16] = '2. Alrededor de las 9 PM, luego vine aquí a beber.';
        dialogos[17] = '1. ¿Cómo se hizo esas heridas?';
        dialogos[18] = '2. Me apalearon por una deuda que tomé para ayudar a Michael con su inversión.';
        dialogos[19] = '1. ¿Podría decirme si reconoce este símbolo?';
        dialogos[20] = '2. Sí, estábamos por invertir en un proyecto para descubrir runas antiguas de una civilización vikinga.';
        dialogos[21] = '1. Interesante, ¿conoció a la esposa del señor Hawks?';
        dialogos[22] = '2. No, solo éramos socios. No éramos tan cercanos, pero el sujeto tenía mucha labia.';
        dialogos[23] = '1. ¿Qué me puede contar del encuentro de ayer con Hawks?';
        dialogos[24] = '2. Nos encontramos, le di una radio para que la venda y obtenga más dinero.';
        dialogos[25] = '1. ¿El personal del lugar puede confirmar su coartada?';
        dialogos[26] = 'Al mirar a varios empleados del establecimiento, todos asienten.';

    } else if (localStorage.getItem("caminoPelear") === "false") {
        dialogos[5] = '2. Sí, el bastardo me debe dinero de una inversión que prometió';
        dialogos[6] = '1. ¿Cuándo fue la última vez que lo vio?';
        dialogos[7] = '2. Ayer por la noche.';
        dialogos[8] = '1. Necesitamos preguntarle un par de cosas sobre ayer, se encontró el cadáver de Michael Hawks.';
        dialogos[9] = '2. ¡Diablos! Ahora no recuperaré mi dinero.';
        dialogos[10] = '1. Bueno... actualmente es sospechoso. ¿Podría decirme hasta qué hora estuvo con él?';
        dialogos[11] = '2. Alrededor de las 9 PM, luego vine aquí a beber.';
        dialogos[12] = '1. ¿Cómo se hizo esas heridas?';
        dialogos[13] = '2. Me apalearon por una deuda que tomé para ayudar a Michael con su inversión';
        dialogos[14] = '1. ¿Podría decirme si reconoce este símbolo?';
        dialogos[15] = '2. Sí, estábamos por invertir en un proyecto para descubrir runas antiguas de una civilización vikinga';
        dialogos[16] = '1. Interesante, ¿conoció a la esposa del señor Hawks?';
        dialogos[17] = '2. No, solo éramos socios, no éramos tan cercanos, pero el sujeto tenía mucha labia.';
        dialogos[18] = '1. ¿Qué me puede contar del encuentro de ayer con Hawks?';
        dialogos[19] = '2. Nos encontramos, le di una radio para que la venda y obtenga más dinero.';
        dialogos[20] = '1. ¿Es suya esta corbata?';
        dialogos[21] = '2. No';
        dialogos[22] = '2. Detective, yo no lo maté y no sé qué más decirle, solo éramos socios.';
        dialogos[23] = '1. Bueno... me ire por el momento, tenga en cuenta que es sospechoso de una investigación policial.';
        dialogos[24] = '2. Entiendo, le deseo suerte en su investigación.';
        dialogos[25] = '1. ¿El personal del lugar puede confirmar su coartada?';
        dialogos[26] = 'Al mirar a varios empleados del establecimiento, todos asienten.';
    }

}


function opcionesPreguntar(aux) {
    if (aux === 4) {
        console.log(aux);
        const opcionesPreguntar = document.getElementById('opcionesPreguntar').style.display = "flex";
        const botonOpcion2 = document.getElementById('botonOpcion2');
        const botonOpcion1 = document.getElementById('botonOpcion');

        const parrafoDentroDelBoton = botonOpcion2.querySelector('p');
        const parrafoDentroDelBoton1 = botonOpcion1.querySelector('p');

        parrafoDentroDelBoton.innerHTML = '¿Por que esta herido señor? (Pelear)';
        parrafoDentroDelBoton1.innerHTML = '¿Conoce a Michael Hawks? (Conversar)';
        // Añade eventos de clic para actualizar el diálogo y continuar
        botonOpcion2.addEventListener("click", function () {
            localStorage.setItem('caminoPelear', "true")
            localStorage.setItem("GanadorPelea", "false");
            caminoElegido();
        });

        botonOpcion1.addEventListener("click", function () {
            localStorage.setItem('caminoPelear', "false")
            caminoElegido();
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
    localStorage.setItem("Edgar", true);
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
            imagen.src = 'imagenes/mindguard.png';
            imagen.addEventListener('click', imagen.onload);
            document.cookie = "pjHablando=" + 'imagenes/mindguard.png';
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

    for (let i = 0; i < nuevoArray.length; i++) {
        var sospechoso = nuevoArray[i];

        // Lista de claves de las propiedades a verificar en cada sospechoso
        var pistas = ["pistaBasuraZ", "pistaDialogoZ", "pistaTaxiZ", "pistaRadioZ", "pistaCadaverZ", "pistaAmorio", "motivo"];

        for (let g = 0; g < pistas.length; g++) {
            let propiedad = pistas[g];
            let siElement = document.getElementById('LP' + (g + 1) + 'Si_' + (i + 1));
            let noElement = document.getElementById('LP' + (g + 1) + 'No_' + (i + 1));

            if (siElement && noElement) { // Verifica si los elementos existen
                if (sospechoso[propiedad] === true) {
                    siElement.style.backgroundColor = "green";
                    noElement.style.backgroundColor = "grey";
                } else if (sospechoso[propiedad] === false) {
                    noElement.style.backgroundColor = "Red";
                    siElement.style.backgroundColor = "gray";
                } else {
                    noElement.style.backgroundColor = "gray";
                    siElement.style.backgroundColor = "gray";
                }
            }
        }
    }
}

function updateStatus() {
    var arrayConvertido = localStorage.getItem('Sospechosos');
    var nuevoArray = JSON.parse(arrayConvertido);

    for (let i = 0; i < nuevoArray.length; i++) {
        var sospechoso = nuevoArray[i];

        // Lista de claves de las propiedades a verificar en cada sospechoso
        var pistas = ["pistaBasuraZ", "pistaDialogoZ", "pistaTaxiZ", "pistaRadioZ", "pistaCadaverZ", "pistaAmorio", "motivo"];

        for (let g = 0; g < pistas.length; g++) {
            let propiedad = pistas[g];
            let marcarSi = document.getElementById('P' + (g + 1) + 'Si_' + (i + 1));
            let marcarNo = document.getElementById('P' + (g + 1) + 'No_' + (i + 1));

            if (marcarSi && marcarSi.checked) {
                sospechoso[propiedad] = true;
            } else if (marcarNo && marcarNo.checked) {
                sospechoso[propiedad] = false;
            }
        }
    }

    localStorage.setItem('Sospechosos', JSON.stringify(nuevoArray));

    cambiarColorLabel();
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
function mostrarPistas(aux) {
    if (aux == 22) {
        document.getElementById('iconosE').style.display = "block";
    }
}

if (localStorage.getItem('Restaurante') == 100 || localStorage.getItem('Restaurante') == "Terminado") {
    document.getElementById("pista6").style.display = "Block";
}
if (localStorage.getItem('letras') == 100) {
    document.getElementById("pista7").style.display = "Block";
}
document.getElementById("cuadro").addEventListener("click", aparecerPista6)
function aparecerPista6() {
    console.log("entra")
    document.getElementById("pista6").style.display = "Block";
    localStorage.setItem('Restaurante', 100);
}

document.getElementById("libroLetras").addEventListener("click", function () {
    document.getElementById("pista7").style.display = "Block";
    localStorage.setItem('letras', 100);

})
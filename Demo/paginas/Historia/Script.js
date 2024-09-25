let aux = 0;

localStorage.setItem('codigoPartidaActual', localStorage.getItem('codigoPartida'));

function generarClaveAleatoria(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let clave = '';
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        clave += caracteres[randomIndex];
    }
    return clave;
}

if(localStorage.getItem('partidasGuardadasLista') == null){
    localStorage.setItem('partidasGuardadasLista', "[]");
}

if (localStorage.getItem('codigoPartida') !== null) {
    if (new URL(document.referrer).pathname == '/Demo/paginas/capituloCarga/index.html') {
        localStorage.setItem('codigoPartidaActual', generarClaveAleatoria(7));
        const codigoActual = localStorage.getItem('codigoPartidaActual')

        const Partida = {
            partida: codigoActual,
            fechaCreacion: new Date().toISOString(),
            DatosPartida: {}
        };

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); 
            const value = localStorage.getItem(key); 
            Partida.DatosPartida[key] = value;
        }
        var partidasGuardadas = JSON.parse(localStorage.getItem('partidasGuardadasLista'))

        partidasGuardadas.push(Partida);
       
        localStorage.setItem('partidasGuardadasLista', JSON.stringify(partidasGuardadas));
    
    }
    /*
    if(localStorage.getItem("PartidasArray") !== null){
        localStorage.setItem("PartidasArray", JSON.stringify(partidasGuardadas));
    }else{
        partidas recuepradas = localStorage.getItem("PartidasArray");
        JSON.parse
    }
    */
} else {
    localStorage.setItem('codigoPartidaActual', localStorage.getItem('codigoPartida'));
}
localStorage.setItem('DatosGenerales', '[]');

function guardarDatosLocal(){

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); 
        const value = localStorage.getItem(key); 
    }
}

document.body.onload = function () {
    var paginaAnterior = document.referrer;
    var urlAnterior = new URL(paginaAnterior);
    var rutaAnterior = urlAnterior.pathname;
    var valorPC = 0;
    mapa();
    var urlP = new URL(window.location);
    var rutaP = urlP.pathname;
    localStorage.removeItem('ub');
    localStorage.setItem('ub', rutaP);

    if (valorPC == 0) {
        if (rutaAnterior.includes("capituloCarga/index.html")) {
            if (valorPC == 0) {

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

                localStorage.removeItem('opacidadP1');
                localStorage.removeItem('opacidadPRadio');
                localStorage.removeItem('opacidadPBasurero');
                localStorage.removeItem('OpacidadPTaxi');
                localStorage.removeItem('OpacidadPCadaver');

                console.log("cookie eliminada");

                document.location.reload();
                valorPC++;
            }
        }
    }
    if (localStorage.getItem('EdgardM') == null) {
        arrayListSospechosos();
    }


}

const dialogos = [
    '  3 de febrero de 1910 a las 11:45 AM, Londres.',
    '  Un policia esta patrullando y al dar vuelta en una esquina el oficial se encuentra con un taxi estacionado de forma incorrecta. Pensando que se trata de un taxista tomando una siesta el policía decide ignorarlo y seguir a la siguiente calle.',
    '  Sin embargo, al caminar por el lado del taxi el oficial nota que la puerta del conductor está ligeramente abierta por lo que decide despertar al taxista y decirle que tenga más cuidado. ',
    '3.Disculpe, no quiero molestar pero debería tener más cuidado con la puerta, más aún en una calle como esta.  ',
    '  Al abrir la puerta el oficial se sorprende al encontrar el taxi completamente vacío, pero más importante con manchas claramente de sangre cubriendo todo el asiento del conductor. ',
    '3.¡Dios mio!',
    '   Al mirar el piso cerca del taxi, logra notar un rastro de sangre que lo lleva hasta un callejón totalmente oscuro excepto por una pequeña luz al fondo del mismo.',
    '   Al principio el oficial lo considera demasiado peligroso ir solo pero decide ir de todos modos ya que si la víctima sigue con vida, es necesario darle ayuda médica inmediata.',
    '   El oficial se arma de valor y, sacando su pistola, se acerca suigiendo la sangre, este encuentra el cadaver y decide informar a la central.',
    '   Enseguida el detective y su ayudante acuden a la escena.',


    '1.¿De que se trata?', '2.Un asesinato, dicen que la victima es un taxista. Estiman que ocurrió esta mañana.',
    '1.hmm, sabes no estamoFs teniendo mucho trabajo, podríamos echarles una mano con esto.',
    '2.No lo sé, seguramente se trate de un simple intento de atraco, no deberíamos perder el tiempo con este tipo de casos.',
    '1.Vamos, si de eso se trata no tardaremos mucho, no es como si tuviéramos mucho que hacer de todos modos.',
    '2.Está bien',
    '1.Buen día muchachos, diganme quien de ustedes es el que encontró el cuerpo',
    '3.Yo, señor.',
    '1.Ok, dime, no tocaste el cuerpo, ¿Cierto?',
    '3.No, señor. Solo la tapa del contenedor, el cuerpo sigue ahí.',
    '1.Perfecto. Ahora, necesito que me cuentes todo lo que sabes.',
    '3.Bueno, solo hacía mi recorrido cuando note un taxi estacionado en medio de una calle desolada.',
    '3.No le di mucha importancia, creí que solo era un taxista haciendo horas extra tratando de descansar un poco por lo que solo iba a seguir caminando cuando note que había dejado la puerta levemente abierta. ',
    '3.Cuando me asome para avisarle al taxista me encontré con la sangrienta escena. El asiento delantero estaba lleno de manchas de sangre, entre un poco en pánico, creía que el culpable podría estar cerca. ',
    '3.Note unas pequeñas gotas de sangre que me llevaron hasta el cuerpo.',
    '1.¿Que dijo el forense respecto a esto?',
    '2.Murió hace poco, se estima que hace una hora como mucho, el cuerpo seguía caliente cuando lo examinaron.',
    '1.Actualmente marcan las 12:00 AM, entonces murió a las 11:00 AM.',
    '1.Le echaré un vistazo al taxi luego, ahora, veré el cadáver y sus alrededores. ',
    '1.Bueno, esto es macabro.',
    '2.Bastante.',
    '1.Necesito los datos de la victima, domicilio, familiares e indagar en esto.',
    '3. Claro, segun sus pertenencias se llama (Nombre), vive en Golden Lane, 57 y su estado civil es casado.',
    '1. Bueno, ire a visitar a la viuda entonces y a hacerle unas preguntas.',
    '2. Yo ire a la comisaria a hacer papeleo... nos vemos luego.'

];
//  dialogos (Lau: Haganlo prolijo si agregan mas dialgos, asi no nos mareamos.)

var protagonista = localStorage.getItem('NombrePJ');
const nombrePj = [protagonista, "Ayudante", "Jhon Browns"];                            // nombre de los personajes
let size = dialogos.length; //tamaño de la lista de dialogos
var boxD = document.getElementById('cuadroDialogo');

function eliminarCookie(nombre) {
    document.cookie = nombre + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
var leer = getCookie("progresoDialogo");
if (leer !== "") {
    aux = parseInt(leer) - 1;
    mostrarDialogos(aux); // Mostrar el diálogo guardado

}
if (aux > 27) {
    localStorage.setItem('OpacidadP1', 100)
}


var fondo = getCookie("fondo");
body.style.backgroundImage = fondo;

var pistaBasuraG = getCookie("opacidadPBasurero");
pista2.style.opacity = pistaBasuraG;

var pistaTaxi = getCookie("opacidadPTaxi");
pista3.style.opacity = pistaTaxi;

var pistaCadaver = getCookie("opacidadPCadaver");
pista4.style.opacity = pistaCadaver;

var pistaRadio = getCookie("opacidadPRadio");
pista5.style.opacity = pistaRadio;

let pista1 = document.getElementById("pista1");
var pista1G = localStorage.getItem('OpacidadP1') + "%";
pista1.style.opacity = pista1G;

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


function arrayListSospechosos() {
    if(localStorage.getItem('Sospechosos') == null){
        var pistaBasuraZ = null;
        var pistaDialogoZ = null;
        var pistaTaxiZ = null;
        var pistaRadioZ = null;
        var pistaCadaverZ = null;
    
        var EdgardM = [
            pistaBasuraZ, pistaDialogoZ, pistaTaxiZ, pistaRadioZ, pistaCadaverZ
        ];
    
        var HenryW = [
            pistaBasuraZ, pistaDialogoZ, pistaTaxiZ, pistaRadioZ, pistaCadaverZ
        ];
    
        var RichardJ = [
            pistaBasuraZ, pistaDialogoZ, pistaTaxiZ, pistaRadioZ, pistaCadaverZ
        ];
    
        var SophieH = [
            pistaBasuraZ, pistaDialogoZ, pistaTaxiZ, pistaRadioZ, pistaCadaverZ
        ];
        var sospechososLista = [
            EdgardM, HenryW, RichardJ, SophieH
        ]
        localStorage.setItem('Sospechosos', JSON.stringify(sospechososLista));
    
    }
}

var arrayConvertido = localStorage.getItem('EdgardM');
arrayConvertido = JSON.parse(arrayConvertido);

console.log(arrayConvertido);


function apagarSonido(event) {
    const toggleMusicButton = document.getElementById('callar');
    const musica = document.getElementById('musicaA');
    toggleMusicButton.addEventListener('click', () => {
        if (musica.paused) {
            musica.play();
        } else {
            musica.pause();
        }
    });
}
function mapa() {
    let mapa = document.getElementById('ContenedorGris');
    if (aux < 30) {
        mapa.style.display = 'none';
    } else {
        mapa.style.display = 'flex'
    }
}

boxD.addEventListener('click', editarTexto);

descubrirSophieC();

function descubrirSophieC() {
    if (aux > 30) {
        localStorage.setItem('SophieCasa', true);
    }
}

function editarTexto(event) {
    if (aux <= size - 1) {
        //mostrar dialogos
        mostrarDialogos(aux);
        aux++
        cambiarFondo(aux);
        boxD.addEventListener('click', crearCookies(aux));
        cargadoPistas(aux);
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


function cargadoPistas(aux) {
    var pistas = document.getElementById("pistas");
    var boxD = document.getElementById('cuadroDialogo');
    var pj1 = document.getElementById("derecha");
    var pj2 = document.getElementById("izquierda");

    var contador = 0;

    pistaBasura.addEventListener("click", encontrarPistaBasurero);
    taxi.addEventListener("click", encontrarPistaTaxi);
    cuerpo.addEventListener("click", encontrarPistaCadaver);
    radio.addEventListener("click", encontrarPistaRadio);

    if (aux == 30) {
        SaltarPistas.style.display = 'block';
        pj1.style.display = 'none';
        pj2.style.display = 'none';
        boxD.style.display = 'none';
        pistas.style.display = 'block';
        document.cookie = "boxD=" + 'none';

        document.cookie = "estadoPJs=" + 'none';
        document.cookie = "estadoNPCs=" + 'none';
        document.cookie = "boxD=" + 'none';
        document.cookie = "pistas=" + 'block';

        var basureroC = null;
        var taxiC = null;
        var cadaverC = null;
        var radioC = null;

        var basureroC = null;
        var taxiC = null;
        var cadaverC = null;
        var radioC = null;

        pistaBasura.addEventListener("click", function () {
            basureroC = getCookie("opacidadPBasurero");
            if (basureroC == "100%" && cadaverC == "100%" && radioC == "100%" && taxiC == "100%") {
                recargoPag();
            }
        });

        taxi.addEventListener("click", function () {
            taxiC = getCookie("opacidadPTaxi");
            if (basureroC == "100%" && cadaverC == "100%" && radioC == "100%" && taxiC == "100%") {
                recargoPag();
            }
        });

        cuerpo.addEventListener("click", function () {
            cadaverC = getCookie("opacidadPCadaver");
            if (basureroC == "100%" && cadaverC == "100%" && radioC == "100%" && taxiC == "100%") {
                recargoPag();
            }
        });

        radio.addEventListener("click", function () {
            radioC = getCookie("opacidadPRadio");
            if (basureroC == "100%" && cadaverC == "100%" && radioC == "100%" && taxiC == "100%") {
                recargoPag();
            }
        });

        function recargoPag() {
            setTimeout(() => {
                document.location.reload();
            }, 1000);
            aux += 2;
            document.cookie = "progresoDialogo=" + aux;
        }


        SaltarPistas.addEventListener("click", function () {
            setTimeout(() => {
                document.location.reload();
            }, "1000");
            aux = aux + 1;
            document.cookie = "progresoDialogo=" + aux;

        });


    } else {
        pistas.style.display = 'none';
    }
}


function encontrarPistaBasurero(event) {
    var opacidad = 100 + '%';
    pista2.style.opacity = opacidad;
    document.cookie = "opacidadPBasurero=" + opacidad;
    localStorage.setItem("opacidadPBasurero", 100);
    return
}
function encontrarPistaTaxi(event) {
    var opacidad = 100 + '%';
    pista3.style.opacity = opacidad;
    document.cookie = "opacidadPTaxi=" + opacidad;
    localStorage.setItem("opacidadPTaxi", 100);
}
function encontrarPistaCadaver(event) {
    var opacidad = 100 + '%';
    pista4.style.opacity = opacidad;
    document.cookie = "opacidadPCadaver=" + opacidad;
    localStorage.setItem("opacidadPCadaver", 100);
}
function encontrarPistaRadio(event) {
    var opacidad = 100 + '%';
    pista5.style.opacity = opacidad;
    document.cookie = "opacidadPRadio=" + opacidad;
    localStorage.setItem("opacidadPRadio", 100);
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

function cambiarSrc(aux) {
    var imagen = document.getElementById('izquierda');
    switch (aux) {
        case 2:
            imagen.src = 'imagenes/policia.png';
            imagen.addEventListener('click', imagen.onload);
            document.cookie = "pjHablando=" + 'imagenes/policia.png';
            break;
        case 1:
            imagen.src = 'imagenes/ayudante.png';
            imagen.addEventListener('click', imagen.onload);
            document.cookie = "pjHablando=" + 'imagenes/ayudante.png';
            break;
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
            imagenOtroPJ.style.display = 'flex';
            document.cookie = "estadoPJs=" + 'flex';

            if (aux > 17) {
                imagenProtagonista.style.display = 'flex';
                document.cookie = "estadoNPCs=" + 'flex';
            }
            break;
    }
}
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
guardarDatosLocal();
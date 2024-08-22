// import { cargarPartida } from '../../script.js';
let aux = 0;
document.body.onload = function () {
    var paginaAnterior = document.referrer;
    var valorPC = 0;
    if (paginaAnterior == "http://127.0.0.1:5500/paginas/capituloCarga/index.html") {
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
    pista1.style.opacity = localStorage.getItem('opacidadP1');
    determinarPE();
    cambiarColorLabel();

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

    if (localStorage.getItem("opacidadP1") != null) {
        document.getElementById('contP1').style.opacity = 100 + "%";
    }
    if (localStorage.getItem("opacidadPCadaver") != null) {
        document.getElementById('contP2').style.opacity = 100 + "%";
    }
    if (localStorage.getItem("opacidadPBasurero") != null) {
        document.getElementById('contP3').style.opacity = 100 + "%";
    }
    if (localStorage.getItem("opacidadPTaxi") != null) {
        document.getElementById('contP4').style.opacity = 100 + "%";
    }
    if (localStorage.getItem("opacidadPRadio") != null) {
        document.getElementById('contP5').style.opacity = 100 + "%";
    }
}


function moverIzq(event) {
    hoja.scrollLeft += -150;
}
const dialogos = [
    '  3 de febrero de 1910 a las 11:45 AM, Londres.',
    '2.Bastante.',
    '3.',
    '1.',
    '3.']; //  dialogos (Lau: Haganlo prolijo si agregan mas dialgos, asi no nos mareamos.)

var protagonista = localStorage.getItem('NombrePJ');
const nombrePj = [protagonista, "Sospechoso"];                            // nombre de los personajes
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
        document.cookie = "opacidadP1=" + opacidad; //guardado de cookies, no tocar -Lau
    }

    document.getElementById("botonOpcion2").addEventListener("click", function () {
        //aca una pista luego de un click  
    });

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

const radios = document.querySelectorAll('input[name="P1"]');
const radios2 = document.querySelectorAll('input[name="P2"]');
const radios3 = document.querySelectorAll('input[name="P3"]');
const radios4 = document.querySelectorAll('input[name="P4"]');
const radios5 = document.querySelectorAll('input[name="P5"]');

radios.forEach(radio => {
    radio.addEventListener('change', updateStatus);
});

radios2.forEach(radio => {
    radio.addEventListener('change', updateStatus2);
});

radios3.forEach(radio => {
    radio.addEventListener('change', updateStatus3);
});

radios4.forEach(radio => {
    radio.addEventListener('change', updateStatus4);
});

radios5.forEach(radio => {
    radio.addEventListener('change', updateStatus5);
});

function cambiarColorLabel(){

    var arrayConvertido = localStorage.getItem('EdgardM');
    var nuevoArray = JSON.parse(arrayConvertido);
    
    if(nuevoArray[0] === true){
        document.getElementById("LP1Si").style.backgroundColor="green";
        document.getElementById("LP1No").style.backgroundColor="grey";
    }else{
        document.getElementById("LP1No").style.backgroundColor="Red"; 
        document.getElementById("LP1Si").style.backgroundColor="gray";
    }
    if(nuevoArray[1] === true){
        document.getElementById("LP2Si").style.backgroundColor="green";
        document.getElementById("LP2No").style.backgroundColor="grey";
    }else{
        document.getElementById("LP2No").style.backgroundColor="Red"; 
        document.getElementById("LP2Si").style.backgroundColor="gray";
    }
    if(nuevoArray[2] === true){
        document.getElementById("LP3Si").style.backgroundColor="green";
        document.getElementById("LP3No").style.backgroundColor="grey";
    }else{
        document.getElementById("LP3No").style.backgroundColor="Red"; 
        document.getElementById("LP3Si").style.backgroundColor="gray";
    }
    if(nuevoArray[3] === true){
        document.getElementById("LP4Si").style.backgroundColor="green";
        document.getElementById("LP4No").style.backgroundColor="grey";
    }else{
        document.getElementById("LP4No").style.backgroundColor="Red"; 
        document.getElementById("LP4Si").style.backgroundColor="gray";
    }
    if(nuevoArray[4] === true){
        document.getElementById("LP5Si").style.backgroundColor="green";
        document.getElementById("LP5No").style.backgroundColor="grey";
    }else{
        document.getElementById("LP5No").style.backgroundColor="Red"; 
        document.getElementById("LP5Si").style.backgroundColor="gray";
    }
     /*
Concepto
    var arrayConvertido = localStorage.getItem('EdgardM');
    var nuevoArray = JSON.parse(arrayConvertido);
    var z = 1;
    for(let i = 0; i < nuevoArray.length; i++){
      
        var LPString = 'LP' + z + 'Si';
        console.log(LPString);
        if(nuevoArray[i] === true){
            document.getElementById(LPString).style.backgroundColor="green";
        }else{
            document.getElementById(LPString).style.backgroundColor="Red";
        
        }
        z++;
    }
    */
}

function updateStatus() {
    var arrayConvertido = localStorage.getItem('EdgardM');
    var nuevoArray = JSON.parse(arrayConvertido);

    let marcarEdgardP1Si = document.getElementById('P1Si');
    let marcarEdgardP1No = document.getElementById('P1No');

    if (marcarEdgardP1Si.checked){
        nuevoArray[0] = true;
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
    else if (marcarEdgardP1No.checked){
        nuevoArray[0] = false
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
}
function updateStatus2() {
    var arrayConvertido = localStorage.getItem('EdgardM');
    var nuevoArray = JSON.parse(arrayConvertido);
    let marcarEdgardP2Si = document.getElementById('P2Si');
    let marcarEdgardP2No = document.getElementById('P2No');

    if (marcarEdgardP2Si.checked){
        nuevoArray[1] = true;
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
    else if (marcarEdgardP2No.checked){
        nuevoArray[1] = false
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
}

function updateStatus3() {
    var arrayConvertido = localStorage.getItem('EdgardM');
    var nuevoArray = JSON.parse(arrayConvertido);
    let marcarEdgardP3Si = document.getElementById('P3Si');
    let marcarEdgardP3No = document.getElementById('P3No');

    if (marcarEdgardP3Si.checked){
        nuevoArray[2] = true;
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
    else if (marcarEdgardP3No.checked){
        nuevoArray[2] = false
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
}
function updateStatus4() {
    var arrayConvertido = localStorage.getItem('EdgardM');
    var nuevoArray = JSON.parse(arrayConvertido);
    let marcarEdgardP4Si = document.getElementById('P4Si');
    let marcarEdgardP4No = document.getElementById('P4No');

    if (marcarEdgardP4Si.checked){
        nuevoArray[3] = true;
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
    else if (marcarEdgardP4No.checked){
        nuevoArray[3] = false
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
}

function updateStatus5() {
    var arrayConvertido = localStorage.getItem('EdgardM');
    var nuevoArray = JSON.parse(arrayConvertido);
    let marcarEdgardP5Si = document.getElementById('P5Si');
    let marcarEdgardP5No = document.getElementById('P5No');

    if (marcarEdgardP5Si.checked){
        nuevoArray[4] = true;
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
    else if (marcarEdgardP5No.checked){
        nuevoArray[4] = false
        localStorage.removeItem('EdgardM');
        localStorage.setItem('EdgardM', JSON.stringify(nuevoArray));
        cambiarColorLabel();
    }
}


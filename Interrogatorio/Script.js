let aux = 0;
document.body.onload = function () {
    var leer = getCookie("progresoDialogo");
    if (leer !== "") {
        aux = parseInt(leer) - 1;
        mostrarDialogos(aux); // Mostrar el diálogo guardado
        cambiarSrc(aux);
    }
}


const dialogos = ['1.¿De que se trata?', '2.Un asesinato, dicen que la victima es un taxista. Estiman que ocurrió esta mañana.',
    '1.hmm, sabes no estamos teniendo mucho trabajo, podríamos echarles una mano con esto.',
    '2.No lo sé, seguramente se trate de un simple intento de atraco, no deberíamos perder el tiempo con este tipo de casos.',
    '1.Vamos, si de eso se trata no tardaremos mucho, no es como si tuviéramos mucho que hacer de todos modos.',
    '2.Está bien']; //  dialogos (Lau: Haganlo prolijo si agregan mas dialgos, asi no nos mareamos.)

const nombrePj = ["(Protagonista)", "Ayudante", "Jhon Browns"];                            // nombre de los personajes
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
        boxD.addEventListener('click', crearCookies);
        aux++
        cambiarSrc(aux);
    }
    else {
        //mostrar botones y desactivar el dialogo
        var op1 = document.getElementById("botonOpcion").removeAttribute("hidden");
        var op2 = document.getElementById("botonOpcion2").removeAttribute("hidden");

    }
}
function cambiarSrc(aux) {
    var imagen = document.getElementById('izquierda');
    console.log('viva: ' + aux);
    if( aux > 3){
        
        if (imagen) {

            imagen.src = 'imagenes/policia.png';
            imagen.addEventListener('click', imagen.onload);
            
        } else {
            console.error('La imagen con el id "izquierda" no se encontró.');
        }    
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

function crearCookies(e) {


    if (!e) e = window.event;
    if (e.target.id == "cuadroDialogo") {
        var cookies = document.cookie = "progresoDialogo=" + aux;
    }
}
function libretaAnotar() {
    var papel = document.getElementById("")
    document.getElementById("botonOpcion").addEventListener("click", function () {
        let pista1 = document.getElementById("pista1");
        pista1.style.opacity = 100 + "%";
    });
    document.getElementById("botonOpcion2").addEventListener("click", function () {

    });

}

function mostrarDialogos(auxiliar) {

    //extrae la posicion del personaje
    let pjHablando = dialogos[auxiliar].substring(0, 1) - 1;
    console.log(pjHablando);

    console.log(auxiliar);



    //muestra el nombre, barrita y el dialogo
    document.getElementById("LineaDialogo").removeAttribute("hidden");
    document.getElementById("PJname").textContent = nombrePj[pjHablando];

    document.getElementById("output").textContent = dialogos[aux].substring(2);
    MostrarPjH(parseInt(pjHablando));
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
    }

}

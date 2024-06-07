let aux = 0;
document.body.onload = function () {
    var leer = getCookie("progresoDialogo");
    if (leer !== "") {
        aux = parseInt(leer) - 1;
        mostrarDialogos(aux); // Mostrar el diálogo guardado
        
    }
    var fondo = getCookie("fondo");
    body.style.backgroundImage = fondo;
}


const dialogos = ['1.¿De que se trata?', '2.Un asesinato, dicen que la victima es un taxista. Estiman que ocurrió esta mañana.',
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
    '1.Ya veo, le echaré un vistazo al lugar luego, ahora, ayudenme a sacar el cuerpo del contenedor.',
    '1.',
    '3.',
    '1.',
    '3.',
    '1.',
    '3.']; //  dialogos (Lau: Haganlo prolijo si agregan mas dialgos, asi no nos mareamos.)

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
        cambiarFondo(aux);
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
    cambiarSrc(parseInt(pjHablando));
}

function cambiarSrc(aux) {
    var imagen = document.getElementById('izquierda');
    switch (aux) {
        case 2:
            imagen.src = 'imagenes/policia.png';
            imagen.addEventListener('click', imagen.onload);
            break;
        case 1:
            imagen.src = 'imagenes/ayudante.png';
            imagen.addEventListener('click', imagen.onload);
            break;
    }
}

function cambiarFondo(aux){
    var fondo = document.getElementById('body');
    switch (aux){
        case 8:
            var fondoGuardado = 'url(imagenes/prueba.png)'
            fondo.style.backgroundImage = fondoGuardado;
            document.cookie = "fondo=" + fondoGuardado;
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

}

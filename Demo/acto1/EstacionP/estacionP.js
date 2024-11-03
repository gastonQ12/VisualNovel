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
let protagonista = localStorage.getItem('NombrePJ')
const nombrePj = [protagonista, "Henry Whalls"];                            // nombre de los personajes

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

  if(localStorage.getItem('Restaurante') == 100 || localStorage.getItem('Restaurante') == "Terminado"){
    document.getElementById("pista6").style.display = "Block";
}
if(localStorage.getItem('letras') == 100){
    document.getElementById("pista7").style.display = "Block";
}


function pedirOrdenAllanamiento(){
    
}


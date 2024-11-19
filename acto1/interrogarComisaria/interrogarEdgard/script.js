const lists = {
    button1: [
        "1. Bien, vamos a lo importante. Sabemos que tenía una deuda pendiente con el fallecido, Michael, y que estaba muy molesto por ello. Sin embargo, su coartada parece sólida, ya que estuvo en un bar durante el crimen. ¿Puede confirmarnos su presencia en el bar esa noche?",  
        "2. Claro, estaba en el bar. Estuve allí toda la noche, bebiendo con algunos amigos. No sé qué pasó con Michael, pero yo no tuve nada que ver.",
        "1. Entiendo, pero la situación se complica un poco. Encontramos una radio suya en la escena del crimen, y lo más sorprendente es que esa radio fue el arma homicida. ¿Cómo explica que su radio estuviera en la escena, usada como un arma?"
    ]
,
button2: [
    "1. Bien, vamos a lo importante. Sabemos que tenía una deuda pendiente con el fallecido, Michael, y que estaba muy molesto por ello. Sin embargo, su coartada parece sólida, ya que estuvo en un bar durante el crimen. ¿Puede confirmarnos su presencia en el bar esa noche?",  
    "2. Claro, estaba en el bar. Estuve allí toda la noche, bebiendo con algunos amigos. No sé qué pasó con Michael, pero yo no tuve nada que ver.",
    "1. Entiendo, pero la situación se complica un poco. Encontramos una radio suya en la escena del crimen, y lo más sorprendente es que esa radio fue el arma homicida. ¿Cómo explica que su radio estuviera en la escena, usada como un arma?",
    "2. Eso… eso no tiene sentido. Yo le di la radio a Michael para que la vendiera, para recuperar parte de la deuda. Le dije que la vendiera, nada más. No sé cómo acabó en la escena del crimen.",
    "1. Si realmente la iba a vender, ¿por qué no hay registro de esa venta? Y más importante aún, ¿No tenía odio hacia el bastardo que le hizo perder dinero?... casi como si quisiera matarlo.",
    "2. Yo… no sé qué pasó. Yo estaba en el bar, y no tengo idea de cómo acabó en la escena. Solo sé que le di la radio a Michael para intentar recuperar algo del dinero que me debía."
]
,
button3: [
    "1. Señor Mindguard, la cuestión es que usted asegura estar en el bar, pero la radio que le dio a Michael fue utilizada como arma para matarlo. Además, sabemos que estaba bebiendo esa noche, lo que podría haber afectado su juicio.",  
    "2. ¡Estaba en el bar! Pregunten a los camareros, a los demás en el local, ¡todos me vieron allí! Yo no maté a Michael, ¡no tengo nada que ver con eso!",
    "1. De acuerdo, lo que está diciendo es que alguien más pudo haber tenido acceso a la radio y pudo haber matado a Michael. Pero con las pruebas que tenemos, parece haber una conexión entre usted y la escena del crimen. ¿Hay algo que no nos ha contado?",
    "2. Yo… yo no lo maté. Estaba en el bar. Estuve bebiendo, pero eso no significa que lo haya matado.",
    "1. Entiendo.",
    "2. Yo no sé qué más decirles. Solo sé que no maté a Michael.",
    "1. Bueno, eso será todo por ahora, señor Mindguard. Seguiremos investigando. Gracias por su tiempo."
]
  };

  const name1 = localStorage.getItem("NombrePJ") || "protagonista";
  const name2 = "Edgard";
  const buttonsDiv = document.getElementById("buttons");
  const listContainer = document.getElementById("list-container");
  const listItem = document.getElementById("list-item");

  let currentList = [];
  let currentIndex = 0;

  document.getElementById("button1").addEventListener("click", () => {
    localStorage.setItem('preguntaLibro', "true");
    startList("button1")});
  document.getElementById("button2").addEventListener("click", () =>{
    localStorage.setItem('preguntaLetras', "true");
    startList("button2")
});
  document.getElementById("button3").addEventListener("click", () => {
    localStorage.setItem('amorioSecretoP', "true");
    startList("button3");
    
});

  // Función para iniciar la lista
  function startList(buttonId) {
    currentList = lists[buttonId];
    currentIndex = 0;
    buttonsDiv.style.display = "none";
    listContainer.style.display = "block";
    
    listItem.textContent = currentList[currentIndex].slice(3).trim();
  }

  // Mostrar siguiente elemento de la lista
  listContainer.addEventListener("click", () => {
    let indicador = currentList[currentIndex].substring(0, 2).trim(); // Obtiene "1." o "2."
    pjHablando = indicador === "1." ? name2 : name1;
    let estadoPJs = document.getElementById("izquierda");
    estadoPJs.src = './imagenes/mindguard.png'
    document.getElementById("PJname").textContent = pjHablando;
    console.log(pjHablando);
    currentIndex++;
    if (currentIndex < currentList.length) {
        listItem.textContent = currentList[currentIndex].slice(3).trim();
    } else {
      // Terminar y volver a mostrar botones
      listContainer.style.display = "none";
      buttonsDiv.style.display = "flex";
    }
  });


//   resto

// import { cargarPartida } from '../../script.js';

let aux = 0;
var boxD = document.getElementById('cuadroDialogo');
var fondo = getCookie("fondo");
const pagina = document.querySelectorAll('.pagina');
let numeroPagina = 0;
let estadoNPC = document.getElementById("derecha");
var estadoNPCs = getCookie("estadoPJs");
let estadoPJs = document.getElementById("izquierda");
var estadoPJsC = getCookie("estadoPJs");
const partidaA = localStorage.getItem('codigoPartidaActual');
const partidaAnti = localStorage.getItem('codigoViejo');
let preguntasRespondidas = {
    letras: "",
    amoriosecreto: "",
    presuntarasesino: ""
};
let protagonista = localStorage.getItem('NombrePJ')
let nombreInterrogado = localStorage.getItem('ainterrogar')
; //  dialogos (Lau: Haganlo prolijo si agregan mas dialgos, asi no nos mareamos.)
var derecha = document.getElementById('derS');
var izquierda = document.getElementById('izqS');
var hoja = document.querySelector(".Sospechososs");



body.style.backgroundImage = fondo;
boxD.addEventListener('click', editarTexto);
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
    };

    
    estadoPJs.style.display = estadoPJsC;

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

        if (localStorage.getItem("pistaBoletos") !== null) {
            document.getElementById('contP7_' + (i + 1)).style.opacity = 100 + "%";
        } else {
            document.getElementById('contP7_' + (i + 1)).style.opacity = 0 + "%";
        }
        if (localStorage.getItem("pistaCarta") !== null) {
            document.getElementById('contP6_' + (i + 1)).style.opacity = 100 + "%";
        } else {
            document.getElementById('contP6_' + (i + 1)).style.opacity = 0 + "%";
        }


    }

}

function mostrarDialogos(auxiliar) {

    let pjHablando = dialogos[auxiliar].substring(0, 1) - 1;

    document.getElementById("LineaDialogo").removeAttribute("hidden");
    document.getElementById("PJname").textContent = nombrePj[pjHablando];

    document.getElementById("output").textContent = dialogos[aux].substring(2);
};



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
};

function moverIzq(event) {
    hoja.scrollLeft += -150;
};




function editarTexto(event) {
    if (aux <= size - 1) {

        mostrarDialogos(aux);
        aux++
        boxD.addEventListener('click', crearCookies(aux));
        console.log(aux)

    }
};

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return unescape(c.substring(name.length, c.length));
    }
    return "";
};

function crearCookies(aux) {
    document.cookie = "progresoDialogo=" + aux;
};

function mostrarPagina(index) {
    pagina.forEach((pagina) => {
        pagina.classList.remove('active');
    })
    pagina[index].classList.add('active');
};

function cambioPaginaT(event) {
    if (event.key === 'ArrowRight') {
        numeroPagina = (numeroPagina + 1) % pagina.length;
        mostrarPagina(numeroPagina);
    } else if (event.key === 'ArrowLeft') {
        numeroPagina = (numeroPagina - 1 + pagina.length) % pagina.length;
        mostrarPagina(numeroPagina);
    }
};

document.addEventListener('keydown', cambioPaginaT);


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
};



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
};

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateStatus);
});


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
    if (localStorage.getItem('RadioPropietario') == 100 || localStorage.getItem('Restaurante') == 'Terminado') {
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
};


document.getElementById("rojo").style.width = localStorage.getItem('karma') + "%"
interrogarS();


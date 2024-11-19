const lists = {
    button1: [
        "1. Muy bien. Empecemos. Sabemos que su coartada no es del todo sólida, y eso nos ha llevado a investigar más a fondo. Encontramos una de sus corbatas y en la escena del crimen, se halló una corbata. ¿Puede explicarnos esa discrepancia?", 
        "2. Eh… bueno… eso… realmente no sé qué decir. Es un traje viejo, tal vez olvidé la corbata. No tiene nada que ver con lo que pasó.", 
        "1. Piensa: Lo veo nervioso, este se relame los labios constantemente.", 
        "1. Entiendo, pero además encontramos una carta de amor y arrepentimiento en su casa. En ella, se menciona un amorío secreto con la esposa del fallecido. ¿Le suena familiar esa carta?", 
        "1. Piensa: Notarías que este se pone a la defensiva, su mirada parece perdida y balbucea un poco.", 
        "2. Eso… no es lo que parece. Era algo del pasado, algo que… que nunca debió haber ocurrido, la corbata seguramente la deje en algún lugar donde tuvimos un encuentro casual.", 
        "1. Según la carta, parecía que sus sentimientos por ella eran profundos. Sin embargo, su arrepentimiento también está claro. ¿Por qué pensó que era necesario confesar esos sentimientos en esa carta?", 
        "2. Estaba confundido… y me sentía culpable. Pero no… no fue por eso que pasó todo esto."
    ]
,
button2: [
    "1. También encontramos un boleto de viaje en su casa. Un boleto de avión con destino a un lugar lejano, fechado justo después del crimen. ¿Qué puede decirnos al respecto?", 
    "2. Eso… eso no tiene nada que ver con esto. Compré ese boleto antes, hace tiempo, pero no… no tiene conexión con lo que pasó con Michael.", 
    "1. Entonces, ¿cómo explicaría la coincidencia? ¿Un boleto comprado justo después del crimen, una carta de arrepentimiento y la falta de la corbata?", 
    "2. No lo sé… No sé qué más decir.", 
    "1. Señor Whells, debe entender que estamos tratando de entender la situación. Las pruebas que tenemos nos señalan a usted. ¿Cree que algo de lo que ha sucedido podría haber llevado a la tragedia?", 
    "2. No… no creo que haya sido por eso… Si algo pasó, no fue por mi culpa.", 
    "1. ¿Cree que alguien más podría haber hecho esto?", 
    "2. No… no sé qué pensar."
]
,
button3: [
    "1. ¿Entonces qué?, ¿lo mató por celos o para quedarse con su esposa?", 
    "2. ¡¿Qué?! Jamás, admito que amaba a Sophie, pero no lo mataría, era mi amigo… mi mejor amigo.", 
    "1. Bueno, está muerto ahora y estoy seguro que algo tienes que ver."
],
  };

  const name1 = localStorage.getItem("NombrePJ") || "policia";
  const name2 = "Henry";
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
    estadoPJs.src = './imagenes/HenryImg.png'
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


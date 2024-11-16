let aux = localStorage.getItem("pistasLocalStorage");
let pistasEncontradas = aux !== null ? Number(aux) : 0;
if (pistasEncontradas >= 3){


    document.getElementById("Pistas").style.display = "none";

}

    if (localStorage.getItem('allanamientoHenry') == "true") {
    document.getElementById('aviso').style.display = 'none';
    document.getElementById('derecha').style.display = 'none';
    sacarTodo();
}
function proseguir() {
    var prob = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    var aviso = document.getElementById('aviso');
    aviso.style.display = 'none';
    console.log(prob)
    let porcentajeActualKarma = localStorage.getItem('karma')
    let nuevPar = parseInt(porcentajeActualKarma);
    nuevPar += 5;
    console.log(nuevPar)
    localStorage.setItem('karma', nuevPar)
    if (50 <= prob) {
        esconderse();
    } else {
        sacarTodo();
        nuv();
    }
}
document.getElementById("rojo").style.width = localStorage.getItem('karma') + "%"

function nuv() {
    let tempo = 2000000;

    const relojTodoTiempo = setInterval(() => {
        tempo -= 30;
        var prob2 = Math.floor(Math.random() * (100 - 10 + 1) + 10);
        if (50 <= prob2) {
            esconderse();
            ponerTodo();
            clearInterval(relojTodoTiempo);
        }
    }, 10000
    );
}
function sacarTodo() {
    let iconosE = document.getElementById('iconosE');
    let reloj = document.getElementById('reloj');
    let cuadroDialogo = document.getElementById('cuadroDialogo');
    cuadroDialogo.style.display = 'none';
    iconosE.style.display = 'none';
    reloj.style.display = 'none';
}
function ponerTodo() {
    let iconosE = document.getElementById('iconosE');
    let reloj = document.getElementById('reloj');
    let cuadroDialogo = document.getElementById('cuadroDialogo');
    cuadroDialogo.style.display = 'flex';
    iconosE.style.display = 'block';
    reloj.style.display = 'block';
}
var intervaloReloj; // Variable global para el intervalo del reloj

function esconderse() {
    var cama = document.getElementById("escondite2");
    var cortinas = document.getElementById("escondite1");
    var balcon = document.getElementById("escondite3");
    var reloj = document.getElementById("reloj");
    var probabilidadSalvarse = 0;

    var bajar = 360;

    localStorage.setItem("Escondite1", 1);

    intervaloReloj = setInterval(() => {
        reloj.style.background = `conic-gradient(red ${bajar}deg, white ${bajar}deg)`;
        bajar -= 9;
        if (bajar <= 0) {
            clearInterval(intervaloReloj);
        }
        console.log(bajar);
        if (bajar == 0) {
            location.href = '../muerteREMASTER/casoFallido.html'
        }
    }, 200
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
    document.location.href = "../../PantallaMuerte/index.html";
}

var urlAnterior = new URL(window.location);
var rutaAnterior = urlAnterior.pathname;
localStorage.removeItem('ub');
localStorage.setItem('ub', rutaAnterior);

function salvado(probabilidad) {
    var random = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    console.log("Random" + random);
    console.log("Probabilidad" + probabilidad);
    if (probabilidad <= random) {
        location.href = '../muerteREMASTER/casoFallido.html'
    } else {
        alert("te salvaste"); //cambiar esto 
        clearInterval(intervaloReloj); // Detén el reloj al salvarse
        localStorage.removeItem("Escondite1");

        // Oculta funcionalidades y opciones de esconderse
        ocultarOpcionesEsconderse();
    }
}
let insertarPistas = document.getElementById("insertarPistas");
insertarPistas.innerHTML = 'Pistas encontradas: ' + pistasEncontradas + "/3";
document.getElementById("pistaCorbata").addEventListener("click", function () {
    const audio = new Audio("./correct-choice-43861.mp3");
    audio.play();
    localStorage.setItem('pistaCorbataHenry', 100);
    pistasEncontradas ++;
    if (pistasEncontradas == 3) {
        replandecer()   
    }
    insertarPistas.innerHTML = 'Pistas encontradas: ' + pistasEncontradas + "/3";
    document.getElementById("pistaCorbata").style.display = 'none';
})
document.getElementById("pistaBoletos").addEventListener("click", function () {
    const audio = new Audio("./correct-choice-43861.mp3");
    audio.play();
    localStorage.setItem('pistaBoletos', 100);
    pistasEncontradas ++;
    if (pistasEncontradas == 3) {
        replandecer()
    }
    insertarPistas.innerHTML = 'Pistas encontradas: ' + pistasEncontradas + "/3";
    document.getElementById("pistaBoletos").style.display = 'none';

})
document.getElementById("pistaCarta").addEventListener("click", function () {
    const audio = new Audio("./correct-choice-43861.mp3");
    audio.play();
    localStorage.setItem('pistaCarta', 100);
    pistasEncontradas ++;
    if (pistasEncontradas == 3) {
        replandecer()
    }
    insertarPistas.innerHTML = 'Pistas encontradas: ' + pistasEncontradas + "/3";
    document.getElementById("pistaCarta").style.display = 'none';
})
function replandecer() {
    localStorage.setItem("pistasLocalStorage" , pistasEncontradas); 
    document.getElementById('contenedorMapa').style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6)";
}

function irMapa() {
    localStorage.setItem("pistasLocalStorage" , pistasEncontradas); 
    localStorage.setItem('allanamientoHenry', false)
    location.href = '../Mapa/Mapa.html'
}

function ocultarOpcionesEsconderse() {
    document.getElementById("escondite1").style.display = 'none';
    document.getElementById("escondite2").style.display = 'none';
    document.getElementById("escondite3").style.display = 'none';
    document.getElementById("reloj").style.display = 'none';
    document.getElementById('aviso').style.display = 'none';
    document.getElementById('derecha').style.display = 'none';
    sacarTodo();
}


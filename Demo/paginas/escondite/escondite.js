function proseguir() {
    var prob = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    var aviso = document.getElementById('aviso');
    aviso.style.display = 'none';
    console.log(prob)

    if(50 <= prob){
        esconderse(); 
    }else{
        sacarTodo();
        nuv();
    }
}
function nuv(){
    let tempo = 2000000;

    const relojTodoTiempo = setInterval(() => {
    tempo -= 30;
    var prob2 = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    if(50 <= prob2){
        esconderse(); 
        ponerTodo();
        clearInterval(relojTodoTiempo);
    }
}, 10000
);
}
function sacarTodo(){
    let iconosE = document.getElementById('iconosE');
    let reloj = document.getElementById('reloj');
    let cuadroDialogo = document.getElementById('cuadroDialogo');
    cuadroDialogo.style.display = 'none';
    iconosE.style.display = 'none';
    reloj.style.display = 'none';
}
function ponerTodo(){
    let iconosE = document.getElementById('iconosE');
    let reloj = document.getElementById('reloj');
    let cuadroDialogo = document.getElementById('cuadroDialogo');
    cuadroDialogo.style.display = 'flex';
    iconosE.style.display = 'block';
    reloj.style.display = 'block';
}
function esconderse(){
    var cama = document.getElementById("escondite2");
    var cortinas = document.getElementById("escondite1");
    var balcon = document.getElementById("escondite3");
    var reloj = document.getElementById("reloj");
    var probabilidadSalvarse = 0;

    var bajar = 360;

    localStorage.setItem("Escondite1", 1);

    const intervalo = setInterval(() => {
        reloj.style.background = `conic-gradient(red ${bajar}deg, white ${bajar}deg)`;
        bajar -= 9;
        if (bajar <= 0) {
            clearInterval(intervalo);
        }
        console.log(bajar);
        if (bajar == 0) {
            volver();
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
    document.location.href = "../../Pantalla Muerte/index.html";
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
        alert("No te salvaste");
    } else {
        alert("te salvaste");
        localStorage.removeItem("Escondite1");
    }
}
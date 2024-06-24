var cama = document.getElementById("escondite2");
var cortinas = document.getElementById("escondite1");
var balcon = document.getElementById("escondite3");
var reloj = document.getElementById("reloj");
var probabilidadSalvarse = 0;

var bajar = 360;
const intervalo = setInterval(() => {
    reloj.style.background = `conic-gradient(red ${bajar}deg, white ${bajar}deg)`;
    bajar -= 9;
    if (bajar <= 0) {
        clearInterval(intervalo);
    }  
    console.log(bajar);
    if(bajar == 0){
        alert("Perdiste");
    }
}, 200
); 



cama.addEventListener('click', function(){ 
    var probabilidadSalvarse = 75;

    salvado(probabilidadSalvarse);
});

cortinas.addEventListener('click', function(){ 
    var probabilidadSalvarse = 40;

    salvado(probabilidadSalvarse);
});

balcon.addEventListener('click', function(){ 
    var probabilidadSalvarse = 86;

    salvado(probabilidadSalvarse);
});

function salvado(probabilidad){
    var random = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    console.log("Random" + random);
    console.log("Probabilidad" + probabilidad);
    if(probabilidad <= random){
        alert("No te salvaste");
    }else{
        alert("te salvaste");
    }
}
/*
for (const aux of dialogos) {
    document.addEventListener("click", a);
}


dialogos.forEach(aux => {
    document.removeEventListener("click", a);
    document.
});

function a(event, aux) {
}

var elementos = document.querySelectorAll('*');

elementos.forEach(function(elemento) {
    elemento.addEventListener('click', function(event) {
        console.log('Se ha hecho clic en el elemento:', elemento);
        document.write("si");
    });
});




while(aux<=3){
    var elementos = document.querySelector("#output");
    console.log(elementos);
    mostrarTexto();
    aux++;
    console.log(aux);
};


function mostrarTexto(){
    elementos.addEventListener('click', function(event) {
    console.log('Se ha hecho clic en el elemento:', elementos);
    elementos.textContent = `sisi`;
    }
)
};
*/

//Click para cambiar de dialogo
let aux = 0;
const dialogos=["sisi", "ñan ñam", 'ewfa', 'ewfa']
let size = dialogos.length;
var boxD = document.getElementById('cuadroDialogo');
var botonesOpciones = 
boxD.addEventListener('click', editarTexto);

function editarTexto(event){    
    if(aux<=size){
        document.getElementById("botonOpcion").setAttribute('hidden', '');
        document.getElementById("botonOpcion2").setAttribute('hidden', '');
        document.getElementById("output").textContent = dialogos[aux];
        aux++
        console.log(aux);
    }
    else{
        document.getElementById("botonOpcion").removeAttribute("hidden");
        document.getElementById("botonOpcion2").removeAttribute("hidden");
    }
}
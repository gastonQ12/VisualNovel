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


let aux = 0;
const dialogos=['1.sisi', '1.ñan ñam', '2.ewfa', 'mama que dice'];//dialogos
const nombrePj=["sujeto 1", "sujeto 2"];
let size = dialogos.length;
var boxD = document.getElementById('cuadroDialogo');

boxD.addEventListener('click', editarTexto);

function editarTexto(event){    
    if(aux<=size-1){
        //ocultar los botones y cambiar de dialogo al hacer click
        document.getElementById("botonOpcion").setAttribute('hidden', '');
        document.getElementById("botonOpcion2").setAttribute('hidden', '');
        document.getElementById("PJname").textContent= "pibe";
        document.getElementById("output").textContent = dialogos[aux];
        aux++
        console.log(aux);
    }
    else{
        //mostrar botones y desactivar el dialogo
        document.getElementById("botonOpcion").removeAttribute("hidden");
        document.getElementById("botonOpcion2").removeAttribute("hidden");
    }
}
*/



let aux = 0;
const dialogos=['1.sisi', '1.ñan ñam', '2.ewfa', '1.mama que dice'];//dialogos
const nombrePj=["sujeto 1", "sujeto 2"];
let size = dialogos.length;
var boxD = document.getElementById('cuadroDialogo');

boxD.addEventListener('click', editarTexto);

function editarTexto(event){    
    if(aux<=size-1){
        //ocultar los botones 
        document.getElementById("botonOpcion").setAttribute('hidden', '');
        document.getElementById("botonOpcion2").setAttribute('hidden', '');

        //mostrar dialogos
        mostrarDialogos(aux);
        aux++
    }
    else{
        //mostrar botones y desactivar el dialogo
        document.getElementById("botonOpcion").removeAttribute("hidden");
        document.getElementById("botonOpcion2").removeAttribute("hidden");
    }
}

function mostrarDialogos( auxiliar ){

    //extrae la posicion del personaje
    let pjHablando = dialogos[auxiliar].substring(0,1)-1;
    console.log(pjHablando);
    
    //muestra el nombre, barrita y el dialogo
    document.getElementById("LineaDialogo").removeAttribute("hidden");
    document.getElementById("PJname").textContent= nombrePj[pjHablando];
    console.log(pjHablando);
    document.getElementById("output").textContent = dialogos[aux].substring(2);
    MostrarPjH(parseInt(pjHablando));
}   

function MostrarPjH(lado){

    switch(lado){
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
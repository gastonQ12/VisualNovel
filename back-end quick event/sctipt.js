
//declaro las variables
let tecla = letraRandom();
let boton = document.getElementById("botonPelea");
var aux = true;
boton.textContent = tecla;
ingresarTecla(tecla);

//funcion para ingresar la tecla
function ingresarTecla(tecla){
    document.addEventListener('keydown', function(event) {
        if(tecla==event.key){
            boton.style.backgroundColor = "green" 
            aux = true;
        }
        else{
            boton.style.backgroundColor = "red"
            aux=false;
        }
    })

}


//funcion para cambiar la letra
setTimeout(function() {
    document.getElementById('botonPelea').style.display = 'block';
}, 1000);

//funcion para desaparecer el boton

setTimeout(function() {
    document.getElementById('botonPelea').style.display = 'none';
}, 5000);

//funcion para generar la letra random
function letraRandom() {
    const letras = ['a', 's', 'd', 'w', 'e', 'q', 'f', 'z', 'x', 'c'];
    const indexRandom = Math.floor(Math.random() * letras.length);
    return letras[indexRandom];
}






// function inicioMinijuago(){

//     let tecla = letraRandom();
//     document.write(tecla);

//     if(ingresarTecla == true){
//         alert("Tecla correcta")
//     }
//     else if(ingresarTecla==false){
//         alert("que tocaba el pibe");
//     }


// }
// function ingresarTecla(){

//     let teclaDetect = document.addEventListener('keydown', function(event) { if(event.key==tecla){
//         console.log("true");
//         return true;
//     }});
    
    
// }

// function letraRandom() {
//     const letras = ['a', 's', 'd', 'w', 'e', 'q', 'f', 'z', 'x', 'c'];
//     const indexRandom = Math.floor(Math.random() * letras.length);
//     return letras[indexRandom];
// }
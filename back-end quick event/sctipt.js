
inicioMinijuago()

// let tecla = letraRandom();
// document.write(tecla);
// ingresarTecla(tecla);

// function ingresarTecla(tecla){
//     document.addEventListener('keydown', function(event) {
//         if(tecla==event.key){alert("Tecla correcta")}
//         else{alert("que tocaba el pibe")}
//     })
// }

// function letraRandom() {
//     const letras = ['a', 's', 'd', 'w', 'e', 'q', 'f', 'z', 'x', 'c'];
//     const indexRandom = Math.floor(Math.random() * letras.length);
//     return letras[indexRandom];
// }

function inicioMinijuago(){

    let tecla = letraRandom();
    document.write(tecla);
    if(ingresarTecla(tecla)){
        alert("Tecla correcta")
    }


function ingresarTecla(tecla){
    document.addEventListener('keydown', function(event) {
        if(tecla==event.key){ return true;}
        else{
            else{
                alert("que tocaba el pibe");}
            }return false;}
    })
}

function letraRandom() {
    const letras = ['a', 's', 'd', 'w', 'e', 'q', 'f', 'z', 'x', 'c'];
    const indexRandom = Math.floor(Math.random() * letras.length);
    return letras[indexRandom];
}



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
    ingresarTecla(tecla);
    
    function ingresarTecla(tecla){
        document.addEventListener('keydown', function(event) {
            if(tecla==event.key){alert("Tecla correcta")}
            else{alert("que tocaba el pibe")}
        })
    }
    
    function letraRandom() {
        const letras = ['a', 's', 'd', 'w', 'e', 'q', 'f', 'z', 'x', 'c'];
        const indexRandom = Math.floor(Math.random() * letras.length);
        return letras[indexRandom];
    }


}
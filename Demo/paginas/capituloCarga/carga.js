document.body.addEventListener('click', function(){
    location.href='../Historia/index.html';
})
let partidaLista = [];

function generarIDUnico() {
    return 'partida_' + Date.now(); 
}
partidaLista.push(localStorage.setItem('codigoPartida', generarIDUnico()));

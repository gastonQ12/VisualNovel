document.body.addEventListener('click', function(){
    location.href='../Historia/index.html';
})
function generarClaveAleatoria(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let clave = '';
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        clave += caracteres[randomIndex];
    }
    return clave;
}

const partida = localStorage.setItem('codigoPartida', generarClaveAleatoria(7));

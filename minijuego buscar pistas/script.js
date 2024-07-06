
var prueba = document.getElementById("prueba1");

prueba.addEventListener('click', encontrarPista);
prueba.addEventListener('mouseenter', cursorEntrar)

function cursorEntrar(event){

    document.style.cursor='url(/imagenes/cursor/)';
    
}
function encontrarPista(event){

    alert('si');
} 

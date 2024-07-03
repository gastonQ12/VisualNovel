let menu = document.getElementById("backToMenu");
let reintentar = document.getElementById("playAgain");

menu.addEventListener("click", volver);

function volver(event){
    document.location.href="../index.html";
}
reintentar.addEventListener("click", refrescar);

function refrescar(event){
    document.location.reload();
}








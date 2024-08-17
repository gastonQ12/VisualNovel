let menu = document.getElementById("backToMenu");
let reintentar = document.getElementById("playAgain");

menu.addEventListener("click", volver);
function volver(event){
    document.location.href="index2.html";
}
reintentar.addEventListener("click", refrescar);

function refrescar(event){
    //aux-=5;
    document.location.reload();
}








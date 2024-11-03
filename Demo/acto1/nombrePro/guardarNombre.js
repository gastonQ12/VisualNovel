
function guardarName(event){
    event.preventDefault();
    var nombreP = document.getElementById("nombreP").value;
    console.log(nombreP);
    localStorage.setItem("NombrePJ", nombreP);
    location.href = '../capituloCarga/index.html';
}

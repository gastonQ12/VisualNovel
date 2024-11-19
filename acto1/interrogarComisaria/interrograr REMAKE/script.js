// Declarar el array con distintos textos
const textos = [
    "Primer texto",
    "Segundo texto",
    "Tercer texto",
    "Cuarto texto",
    "Último texto"
];
const textos2 = [
    "Primer texto2",
    "Segundo texto2",
    "Tercer texto2",
    "Cuarto texto2",
    "Último texto2"
];
const textos3 = [
    "Primer texto3",
    "Segundo texto3",
    "Tercer texto3",
    "Cuarto texto3",
    "Último texto3"
];
let indice = 0;

const opcion1 = document.getElementById("opcion1");
const opcion2 = document.getElementById("opcion2");
const opcion3 = document.getElementById("opcion3");


const recuadro = document.getElementById("display-box");

opcion1.addEventListener("click", () => {
    indice = 0;
    actializarTexto(textos)
});

opcion2.addEventListener("click", () => {
    indice = 0;
    actializarTexto(textos2)
});

opcion3.addEventListener("click", () => {
    indice = 0;
    actializarTexto(textos3)
});
// Función para cambiar al siguiente texto al hacer clic en el recuadro

function actializarTexto(array) {
    if (array.length > 0) {
    recuadro.style.display = "block"; // Mostrar el recuadro
}
recuadro.addEventListener("click", () => {
    indice ++; // Avanzar y reiniciar si se supera el último
    recuadro.textContent = array[indice]; // Mostrar el texto actual
})};
console.log(indice);
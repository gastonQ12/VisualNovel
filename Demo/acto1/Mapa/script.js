//Policia c1
document.getElementById('casa1').addEventListener("mouseover", PAPoliciaOver);
document.getElementById('casa1').addEventListener("mouseout", PAPoliciaOut);

//Sophie c3
document.getElementById('casa3').addEventListener("mouseover", PASophieHouseOver);
document.getElementById('casa3').addEventListener("mouseout", PASophieHouseOut);
//Casa del amigo
document.getElementById('casa4').addEventListener("mouseover", PACasaAmigoOver);
document.getElementById('casa4').addEventListener("mouseout", PACasaAmigoOut);
//restaurante
document.getElementById('casa2').addEventListener("mouseover", PARestauranteOver);
document.getElementById('casa2').addEventListener("mouseout", PARestauranteOut);
//hospital

document.getElementById('casa5').addEventListener("mouseover", PAClubOver);
document.getElementById('casa5').addEventListener("mouseout", PAClubOut);

//PANEL AVISO == PA
function PARestauranteOver(){
    document.getElementById("aviso").style.display = 'flex';
    document.getElementById("aviso").innerHTML = '<h1> RESTAURANTE </h1>'
}
function PARestauranteOut(){
    document.getElementById("aviso").style.display = 'none';
}

function PAClubOver(){
    document.getElementById("aviso").style.display = 'flex';
    document.getElementById("aviso").innerHTML = '<h1> CLUB (EDGARD) </h1>'
}
function PAClubOut(){
    document.getElementById("aviso").style.display = 'none';
}

function PAPoliciaOver() {
    document.getElementById("aviso").style.display = 'flex';
    document.getElementById("aviso").innerHTML = '<h1> ESTACION DE POLICIA </h1>'
}
function PAPoliciaOut() {
    document.getElementById("aviso").style.display = 'none';
}

function PACasaAmigoOver() {
    document.getElementById("aviso").style.display = 'flex';
    document.getElementById("aviso").innerHTML = '<h1> CASA DE HENRY  WHALLS</h1>'
}
function PACasaAmigoOut() {
    document.getElementById("aviso").style.display = 'none';
}

function PASophieHouseOver() {
    document.getElementById("aviso").style.display = 'flex';
    document.getElementById("aviso").innerHTML = '<h1> CASA DE SOPHIE </h1>'
}
function PASophieHouseOut() {
    document.getElementById("aviso").style.display = 'none';
}


if(localStorage.getItem('SophieCasa') === 'Terminado'){
    document.getElementById('casaSophia').style.opacity = "45%"
}

function determinarPresionarCasaSophia(){
    if(localStorage.getItem('SophieCasa') !== 'Terminado'){
        irCasaSophia();
    }else{
        alert('Ya no puedes visitar la casa')
    }
}


function irCasaSophia(){
    location.href = '../Interrogatorio/index.html'
}

if(localStorage.getItem('Restaurante') === 'Terminado'){
    document.getElementById('restauranteAmigo').style.opacity = "45%"
    document.getElementById('restauranteAmigo').style.transform = "none"
    document.getElementById('restauranteAmigo').style.cursor = "default"
}

function determinarPresionarRestaurante(){
    if(localStorage.getItem('Restaurante') !== 'Terminado'){
        irRestaurante();
    }else{
        alert('Ya no puedes visitar el restaurante')
    }
}

function irCallejon(){
    location.href = '../Historia/index.html'
}

/* nico */

document.addEventListener("DOMContentLoaded", function() {
    const casas = ['casa1', 'casa2', 'casa3', 'casa4', 'casa5'];

    casas.forEach(casaId => {
        const casa = document.getElementById(casaId).querySelector('img'); 

        if (localStorage.getItem(casaId) === 'clicked') {
            casa.classList.add('no-shadow'); 
        }

        document.getElementById(casaId).addEventListener("click", function() {
            if (!localStorage.getItem(casaId)) {
                casa.classList.add('no-shadow'); 
                localStorage.setItem(casaId, 'clicked');
            }

            switch(casaId) {
                case 'casa1':
                    window.location.href = '../EstacionP/estacionP.html'; 
                    break;
                case 'casa2':
                    determinarPresionarRestaurante(); 
                    break;
                case 'casa3':
                    determinarPresionarCasaSophia(); 
                    break;
                case 'casa4':
                    window.location.href = '../escondite/escondite.html'; 
                    break;
                case 'casa5':
                    determinarPresionarClub(); 
                    break;
                default:
                    console.error("Casa desconocida: " + casaId);
                    break;
            }
        });
    });
});

/* agdsahdafwa */

if(localStorage.getItem('escenaDelCrimen') === 'Terminado'){
    document.getElementById('callejon').style.opacity = "65%"
    document.getElementById('callejon').style.transform = "none"
    document.getElementById('callejon').style.cursor = "default"
}

function determinarPresionarCallejon(){
    if(localStorage.getItem('escenaDelCrimen') !== 'Terminado'){
        MDN ();
    }else{
        alert('Ya no puedes visitar el callejón')
    }
}
function irRestaurante(){
    location.href = '../restaurante/index.html'
}

function irCallejon(){
    location.href = '../Historia/index.html'
}


if(localStorage.getItem('clubEdgard') === 'Terminado'){
    document.getElementById('clubEdgard').style.opacity = "65%"
    document.getElementById('clubEdgard').style.transform = "none"
    document.getElementById('clubEdgard').style.cursor = "default"
}

function determinarPresionarClub(){
    if(localStorage.getItem('clubEdgard') !== 'Terminado'){
        irClubEdgard();
    }else{
        alert('Ya no puedes visitar la casa')
    }
}
function irClubEdgard(){
    location.href = '../clubEdgard/index.html'
}

verZonas();
function verZonas(){
    let casaSophie = document.getElementById('casa3');
    let estacionpolicia = document.getElementById('casa1');
    let casaAmigo = document.getElementById('casa4');
    let restaurante = document.getElementById('casa2');
    let club = document.getElementById('casa5');
    
    if(localStorage.getItem('SophieCasa') != null){
        casaSophie.style.display = 'block';
    }else{
        casaSophie.style.display = 'none';
    }
    if(localStorage.getItem('casaAmigo') != null){
        casaAmigo.style.display = 'block';
    }else{
        casaAmigo.style.display = 'none';
    }
    if(localStorage.getItem('clubEdgard') != null){
        club.style.display = 'block';
    }else{
        club.style.display = 'none';
    }
    if(localStorage.getItem('Restaurante') != null){
        restaurante.style.display = 'block';
    }else{
        restaurante.style.display = 'none';
    }
}

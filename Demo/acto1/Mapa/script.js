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

document.getElementById('casa5').addEventListener("mouseover", PAHospitalOver);
document.getElementById('casa5').addEventListener("mouseout", PAHospitalOut);

//PANEL AVISO == PA
function PARestauranteOver(){
    document.getElementById("aviso").style.display = 'flex';
    document.getElementById("aviso").innerHTML = '<h1> RESTAURANTE </h1>'
}
function PARestauranteOut(){
    document.getElementById("aviso").style.display = 'none';
}

function PAHospitalOver(){
    document.getElementById("aviso").style.display = 'flex';
    document.getElementById("aviso").innerHTML = '<h1> HOSPITAL </h1>'
}
function PAHospitalOut(){
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
}

function determinarPresionarRestaurante(){
    if(localStorage.getItem('Restaurante') !== 'Terminado'){
        irRestaurante();
    }else{
        alert('Ya no puedes visitar la casa')
    }
}
function irRestaurante(){
    location.href = '../restaurante/index.html'
}




verZonas();
function verZonas(){
    let casaSophie = document.getElementById('casa3');
    let estacionpolicia = document.getElementById('casa1');
    let casaAmigo = document.getElementById('casa4');
    let restaurante = document.getElementById('casa2');
    let hospital = document.getElementById('casa5');
    
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
    if(localStorage.getItem('Hospital') != null){
        hospital.style.display = 'block';
    }else{
        hospital.style.display = 'none';
    }
    if(localStorage.getItem('Restaurante') != null){
        restaurante.style.display = 'block';
    }else{
        restaurante.style.display = 'none';
    }
}
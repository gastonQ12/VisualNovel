const vida_enemigo = document.getElementById('vida-enemigo');
const vida_jugador = document.getElementById('vida-jugador');
const mensajes = document.getElementById('mensajes');

let enemigoHP = 100; let jugadorHP = 100;

const botonAtaque = document.getElementById('atacar');
const botonDefensa = document.getElementById('defender');
const botonCura = document.getElementById('curar');

botonAtaque.addEventListener('click', attack);
botonDefensa.addEventListener('click', defend);
botonCura.addEventListener('click', heal);

function attack() {
  const damage = Math.floor(Math.random() * 20) + 10;
  enemigoHP -= damage;
  vida_enemigo.textContent = enemigoHP + ' HP';

  const ataque_enemigo = Math.floor(Math.random() * 15) + 5;
  jugadorHP -= ataque_enemigo;
  vida_jugador.textContent = jugadorHP + ' HP';

  displayMessage(`Atacaste al enemigo por ${damage} HP. Recibiste ${ataque_enemigo} HP de daño.`);

  checkVictory();
}

function defend() {
  displayMessage('Te has defendido. Recibes menos daño.');
  jugadorHP -= 5;
  vida_jugador.textContent = jugadorHP + ' HP';

  const ataque_enemigo = Math.floor(Math.random() * 10) + 2;
  jugadorHP -= ataque_enemigo;
  vida_jugador.textContent = jugadorHP + ' HP';

  displayMessage(`Atacaste al enemigo por ${damage} HP. Recibiste ${ataque_enemigo} HP de daño.`);

  displayMessage(`Recibiste ${ataque_enemigo} HP de daño.`);

  checkVictory();
}

function heal() {
  if (jugadorHP < 100) {
    const healAmount = Math.floor(Math.random() * 20) + 10;
    jugadorHP += healAmount;
    vida_jugador.textContent = jugadorHP + ' HP';

    
    displayMessage(`Te has curado por ${healAmount} HP.`);
  } else {
    displayMessage('Ya estás con la salud completa.');
  }
}

function displayMessage(message) {
  mensajes.innerHTML = message + '<br>' + mensajes.innerHTML;
}

function checkVictory() {
  if (enemigoHP<= 0) {
    displayMessage('¡Has ganado!');
    disableButtons();
  } else if (jugadorHP <= 0) {
    displayMessage('¡te mato un gordojajjsja!');
    disableButtons();
  }
}
function disableButtons() {
  botonAtaque.disabled = true;
  botonDefensa.disabled = true;
  botonCura.disabled = true;
}

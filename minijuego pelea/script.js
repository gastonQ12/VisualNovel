const enemyHP = document.getElementById('vida-enemigo');
const playerHP = document.getElementById('vida-jugador');
const messages = document.getElementById('mensajes');

let enemyHealth = 100; let playerHealth = 100;

const attackButton = document.getElementById('atacar');
const defendButton = document.getElementById('defender');
const healButton = document.getElementById('curar');

attackButton.addEventListener('click', attack);
defendButton.addEventListener('click', defend);
healButton.addEventListener('click', heal);

function attack() {
  const damage = Math.floor(Math.random() * 20) + 10;
  enemyHealth -= damage;
  enemyHP.textContent = enemyHealth + ' HP';

  const enemyAttack = Math.floor(Math.random() * 15) + 5;
  playerHealth -= enemyAttack;
  playerHP.textContent = playerHealth + ' HP';

  displayMessage(`Atacaste al enemigo por ${damage} HP. Recibiste ${enemyAttack} HP de daño.`);

  checkVictory();
}

function defend() {
  displayMessage('Te has defendido. Recibes menos daño.');
  playerHealth -= 5;
  playerHP.textContent = playerHealth + ' HP';

  const enemyAttack = Math.floor(Math.random() * 10) + 2;
  playerHealth -= enemyAttack;
  playerHP.textContent = playerHealth + ' HP';

  displayMessage(`Recibiste ${enemyAttack} HP de daño.`);

  checkVictory();
}

function heal() {
  if (playerHealth < 100) {
    const healAmount = Math.floor(Math.random() * 20) + 10;
    playerHealth += healAmount;
    playerHP.textContent = playerHealth + ' HP';

    displayMessage(`Te has curado por ${healAmount} HP.`);
  } else {
    displayMessage('Ya estás con la salud completa.');
  }
}

function displayMessage(message) {
  messages.innerHTML = message + '<br>' + messages.innerHTML;
}

function checkVictory() {
  if (enemyHealth <= 0) {
    displayMessage('¡Has ganado!');
    disableButtons();
  } else if (playerHealth <= 0) {
    displayMessage('¡te mato un gordojajjsja!');
    disableButtons();
  }
}

function disableButtons() {
  attackButton.disabled = true;
  defendButton.disabled = true;
  healButton.disabled = true;
}

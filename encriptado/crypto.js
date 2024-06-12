

// Importamos la biblioteca Crypto.js
const CryptoJS = require("crypto-js");

// Definimos la clave de cifrado
const key = "mi-clave-de-cifrado";

// Definimos el mensaje a cifrar
const message = "Hola, mundo!";

// Ciframos el mensaje usando AES
const ciphertext = CryptoJS.AES.encrypt(message, key).toString();

console.log(ciphertext);
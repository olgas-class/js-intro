// Chiediamo all'utente la sua età e comunichiamo l'anno di nascita

// I dati
const currentYear = 2022;
// Chiedere l'età dell'utente (Input)
const userAge = prompt("Quanti anni hai?");
console.log(userAge, typeof userAge);
// Trasformo la stringa in numero
const userAgeNumber = parseInt(userAge);
console.log(userAgeNumber, typeof userAgeNumber);

// Elaborazione
const birthYear = currentYear - userAgeNumber;
console.log(birthYear);

// Preparo la frase di output
const result = `Ciao! Sei nato in ${birthYear}`;

// Scrivere output
// document.getElementById("result").innerHTML = "Ciao! Sei nato in " + birthYear;
document.getElementById("result").innerHTML = result;

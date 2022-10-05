// Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

// Input: chiedere nome dell'utente
const userName = prompt("Come ti chiami?");
console.log(userName);

// Elaborazione: comporre il saluto
// const greeting = "Ciao " + userName;
const greeting = `Ciao ${userName}`;
console.log(greeting);

// Output: scrivere il saluto nella pagina
document.getElementById("greeting").innerHTML = greeting;
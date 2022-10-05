// Primi passi: output sullo schermo
// document.writeln("Hello world!");
// alert("Hello world!");
// Case sensitive
// document.getElementById("main-title").innerHTML = "Hello world!";

// Variabili
// 1 Dichiarazione
// 2 Assegnamento -> primo - inizializzazione
let user;
user = "Olga";
console.log(user);
user = 23;
document.getElementById("main-title").innerHTML = "Ciao, sono " + user;

user = "Alberto";
document.getElementById("username").innerHTML = "Il mio username è " + user + "1234";

const age = 36;
document.getElementById("user-age").innerHTML = age;

// let myString = "Ciao";
// alert(myString);
// 
// myString = "Arrivederci";
// alert(myString);

/*
    Questo è il mio commento
    a più rige
*/

// Tipi di dato

// String
let myString = "Ciao Olga";
let anotherString = 'Altra stringa';
// Template literal
let btString = `Backtick string`;

let exampleSting = "Che bello l'albero";
let anotherExampleSting = 'Che bello l\'albero';

let htmlString = '<h2 class="secondary-title">Titolo secondario</h2>';

// Operazioni
// - concatenazione
const firstWord = "Ciao";
const secondWord = "mondo";
// const greeting = firstWord + " " + secondWord; 
const greeting = `Ecco il saluto: ${firstWord} ${secondWord}`;
document.getElementById("result").innerHTML = greeting;

// Numeri

let myNumber = 10;
let myFakeNumber = "10";
console.log(myNumber);
console.log(myFakeNumber);
console.log(myNumber + 12);
console.log(myFakeNumber + 12);

let myOtherNumber = 2;

const result = myNumber + myOtherNumber;
console.log(result);

let transformedToNumber = parseInt(myFakeNumber);
console.log(transformedToNumber);

let transformedToString = myNumber.toString();
console.log(transformedToString);

console.log(typeof(myFakeNumber));

// Iterazione con utente
// Chiedere all'utente un numero e scrivere il suo numero magiorato di 10
const userNumber = prompt("Ciao! Scrivi un numero");
console.log(userNumber, typeof(userNumber));
const userNumberTransformed = parseInt(userNumber);
console.log(userNumberTransformed, typeof(userNumberTransformed));
const finalResult = userNumberTransformed + 10;
console.log(finalResult); 

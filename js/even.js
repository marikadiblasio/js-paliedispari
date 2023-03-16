//Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const boxUserChoice = document.getElementById('evenorodd');
console.dir(boxUserChoice);
const boxUserNum = document.getElementById('userNum');
console.dir(boxUserNum);
let pcNum = document.querySelector('.pcNum');
let result = document.querySelector('.result');
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let rndNum = '';
let sum ='';
const btn = document.querySelector('button');
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let msg = document.querySelector('h2');
let evenorodd= '';
btn.addEventListener('click', function (){
    const userChoice = boxUserChoice.value;
    if (!userChoice) {
        document.querySelector('.w-100').innerHTML += `
        <div class="alert alert-danger">Compila tutti i campi!!!</div>
        `
    } else {
    printRndNum()
    evenOdd(sum);
    let end = (userChoice == evenorodd) ? 'vinto' : 'perso';
    msg.innerHTML = `Hai ${end} questa partita`;
    }
});
//Functions
function printRndNum(){
    rndNum=getRndNumIncl(1,5);
    pcNum.innerText = rndNum;
    addition(userNum,rndNum);
}
function addition(){
    const userNum = boxUserNum.value;
    sum = parseInt(userNum) + parseInt(rndNum);
    result.innerText = sum;
    return sum
}
function evenOdd(num) {
    if (num % 2 === 0) {
        evenorodd = 'even';
    } else {
        evenorodd = 'odd';
    }
    return evenorodd;
}

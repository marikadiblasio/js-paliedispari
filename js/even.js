//Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const boxUserChoice = document.getElementById('evenorodd');
const boxUserNum = document.getElementById('userNum');
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
    const userNum = parseInt(boxUserNum.value);
    if (!userChoice || !userNum || userNum < 1 || userNum > 5) {
        document.querySelector('.w-100').innerHTML += `
        <div class="alert alert-danger">Compila tutti i campi con dati validi!!!</div>
        `
    } else {
    printRndNum();
    addition(userNum, rndNum);
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
function addition(num1,num2){
    sum = num1 + num2;
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

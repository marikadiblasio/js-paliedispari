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
let sum = document.querySelector('.result');
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let rndNum = '';
const btn = document.querySelector('button');
btn.addEventListener('click', printRndNum);
// Sommiamo i due numeri
btn.addEventListener('click', addition);
//Functions
function printRndNum(){
    rndNum=getRndNumIncl(1,5);
    pcNum.innerText = rndNum;
    addition(userNum,rndNum);

}
function addition(){
    const userNum = boxUserNum.value;
    console.log(userNum);
    c= parseInt(userNum) + parseInt(rndNum);
    sum.innerText = c;
    console.log(c);
    return c
}

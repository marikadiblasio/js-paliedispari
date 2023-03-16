/**
 * Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */
//Prendo la parola e il bottone
const boxWord = document.getElementById('word');
const btn = document.querySelector('button');
//evento
btn.addEventListener('click', function(){
    const word = boxWord.value.toLowerCase().trim();
    if ((word) && isNaN(word)){
       const wArr = word.split('');
       const rArr = wArr.reverse();
       const rWord = rArr.join('');
       if (word == rWord){
        document.querySelector('h2').innerHTML = `La tua parola è palindroma`;
       } else {
        document.querySelector('h2').innerHTML = `La tua parola non è palindroma`;
       }
    } else {
        document.querySelector('div').innerHTML += ` 
        <div class="alert alert-danger">Inserisci una parola!</div>
         `
    }
}
)
// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

function reversedWord(str){
    return str.split('').reverse().join('');

}


var userWord = prompt('inserisci una parola');

reversedWord(userWord);

console.log(reversedWord(userWord))
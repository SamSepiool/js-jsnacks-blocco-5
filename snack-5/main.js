// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

function iDKWhatImDoing(arr, a, b){
        let newArr = [];
        for (let i = a - 1; i <= b - 1; i++ ){
            newArr.push(arr[i]);
        }
            
        return newArr;
   
}


function numRnd(min, max){
    return Math.floor(Math.random() * (max-min+1) ) + min;
}




const arrRandom = [];

// riempio array random
var ranIndex = numRnd(1, 50);

for (var i = 0; i<ranIndex; i++) {
    let newEl = numRnd(1,50);
    arrRandom.push(newEl);
}

console.log(arrRandom);




var numB = parseInt(prompt("l'array ha " + arrRandom.length + ' elementi.' + ' inserisci un numero non superiore a ' + arrRandom.length));
// while (!num2 <= arrRandom.length){
//     num2 = parseInt(prompt('attento, devi inserire un numero non superiore a ' + arrRandom.length));
// }

var numA = parseInt(prompt('ora inserisci un numero inferiore a quello appena inserito' + (numB)));
// while (!num1 < num2){
//     num1 = parseInt(prompt('attento, devi inserire un numero inferiore a ' + (num2)));
// }

console.log(iDKWhatImDoing(arrRandom, numA, numB));
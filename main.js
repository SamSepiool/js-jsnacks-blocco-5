// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

function iDKWhatImDoing(arr, a, b){
    if (a < b &&  b <= arr.length) {
        let newArr = [];
        for (let i = a - 1; i <= b -1; i++ ){
            newArr.push(arr[i]);
        }
    }
}


function numRnd(min, max){
    return Math.floor(Math.random() * (max-min+1) ) + min;
}




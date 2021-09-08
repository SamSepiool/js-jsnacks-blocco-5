// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
var zucchini = [
    {
        'varietà': 1,
        'peso': 3,
        'lunghezza': 24
    },
    {
        'varietà': 2,
        'peso': 1,
        'lunghezza': 22
    },
    {
        'varietà': 3,
        'peso': 7,
        'lunghezza': 21
    },
    {
        'varietà': 4,
        'peso': 9,
        'lunghezza': 20
    },
    {
        'varietà': 5,
        'peso': 34,
        'lunghezza': 29
    },
    {
        'varietà': 6,
        'peso': 12,
        'lunghezza': 9
    },
    {
        'varietà': 7,
        'peso': 31,
        'lunghezza': 7
    },
    {
        'varietà': 8,
        'peso': 35,
        'lunghezza': 4
    },
    {
        'varietà': 9,
        'peso': 32,
        'lunghezza': 2
    },
    {
        'varietà': 10,
        'peso': 7,
        'lunghezza': 8
    },

]

const longZucchini = [];
const shortZucchini = [];


for (var i = 0; i < zucchini.length; i++) {
    if (zucchini[i]['lunghezza'] < 15){
        shortZucchini.push(zucchini[i])
    } else {
        longZucchini.push(zucchini[i])
    }
}

console.log(longZucchini)
console.log(shortZucchini)

var longZucchiniWeight = 0;
for (var i = 0; i < longZucchini.length; i++) {
    longZucchiniWeight += longZucchini[i]['peso'];
}

var shortZucchiniWeight = 0;
for (var i = 0; i < longZucchini.length; i++) {
    shortZucchiniWeight += shortZucchini[i]['peso'];
}

console.log( `Peso totale zucchine corte => ${shortZucchiniWeight}`);
console.log( `Peso totale zucchine lunghe => ${longZucchiniWeight}`);

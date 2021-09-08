// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// Crea un array di 10 oggetti che rappresentano una zucchina
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

// Calcola quanto pesano tutte le zucchine.

var zucchiniTotalWeight = 0;


for (var i = 0; i < zucchini.length; i++) {
    // console.log('varietà: ' + zucchini[i] + zucchini[i]['peso']);
    console.log( `varietà: ${zucchini[i]['varietà']} => peso: ${zucchini[i]['peso']} `)
    zucchiniTotalWeight += zucchini[i]['peso'];
}

alert('peso totale zucchine: ' + zucchiniTotalWeight);
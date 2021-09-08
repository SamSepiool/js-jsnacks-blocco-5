// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].





function numRnd(min, max){
    return Math.floor(Math.random() * (max-min+1) ) + min;
}

function alternate(arr1, arr2, len1,
    len2, finalArr)
{
let a = 0, b = 0, c = 0;


while (a<len1 && b <len2)
{
finalArr[c++] = arr1[a++];
finalArr[c++] = arr2[b++];
}

while (a < len1)
finalArr[c++] = arr1[a++];

while (b < len2)
finalArr[c++] = arr2[b++];
}

// creo due array random

arr1 = []

var rndElement;

for ( var i = 0; i<10; ) {
    rndElement = numRnd(1,50);
    if (!arr1.includes(rndElement)){
        arr1.push(rndElement);
        i++
    }
}

console.log(arr1)

arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


arr3 = []
arr3.length = arr1.length + arr2.length;

alternate(arr1, arr2, arr1.length, arr2.length, arr3);

console.log(arr3)


// 1. Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.

// creo un array per mettere i 5 numeri casuali

let number= numRandom(5);
let memory;
console.log(number)
// funzione per generare 5 numeri random

function numRandom(x, z) {
    y = [];
    
    let i = 0;
    while (i < x) {
        z = getRndInteger(1, 100);
        y.push(z)
        i++
    }
    console.log(y);
    return y;
}




// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 1. Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.

// creo un array per mettere i 5 numeri casuali


// ;
const simon = document.getElementById('simon');  
let number = numRandom(5);

const send = document.querySelector('button');
console.log(simon);
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
send.addEventListener('click', function(){     
    simon.innerHTML = number;       
    let memory = setTimeout(nascosto, 3000);
function nascosto (){
   simon.remove(number);
}       
});



// funzione per stampare in pagina i numeri per 30 secondi



// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 1. Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.

const simon = document.getElementById('simon'); //costante h3 con dentro i numeri random
let quantitàNumRandom = 5;
let number = []; //array numeri random
let numUser = []; // array numeri utente
let arrNum = [];
let equalNum = [];
let send = document.querySelector('button'); //bottone inizia memory
const sendResult = document.getElementById('sendResult'); //bottone Indovina
let utente = document.querySelector('h2');
// creo un array per mettere i 5 numeri casuali
function numRandom(x) {
    y = [];
    let i = 0;
    while (i < x) {
        z = getRndInteger(1, 100);
        y.push(z)
        i++
    }
    return y;
}
// funzione per far sparire i numeri dopo 3 secondi, timer parte dal click
send.addEventListener('click', function () {
    number = numRandom(quantitàNumRandom); // quantità numeri random 
    console.log('numeri random' + number);
    arrNum = number;
    simon.innerHTML = number;
    send = setTimeout(nascosto, 3000);
    function nascosto() {
        simon.remove(number);
    }
});


//ogni volta che clicco il bottone, mette il numero inserito in Array
//guardare se corrispondono i numeri da un array all'altro
sendResult.addEventListener('click', function () {
    result = parseInt(document.getElementById('result').value);
    // mettere i numeri da input in array nuovo        
    numUser.push(result);
    // se gli elementi del primo array sono uguali al secondo array(tramite array3)    
    if (numUser.length === quantitàNumRandom) {
        equalNum = equalArr(arrNum, numUser);
        console.log('equalNum' + equalNum);
        if (equalNum.length === quantitàNumRandom) {
            console.log('hai vinto');
            text = 'Hai Indovinato tutti i numeri, ora le porte di Durin si apriranno...';
            
        }
        else {
            text = 'Non hai indovinato tutti i numeri, quindi hai perso perchè hai indovinato solo ' + equalNum;
        }
    }
    else {
        console.log('continua...');
        text = 'continua...';
    }
    utente.innerHTML = text;
});

function equalArr(arr1, arr2) {

    let arr3 = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            arr3.push(arr2[i]);
        }
    }
    return arr3;
}








// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
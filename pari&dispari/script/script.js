/* Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

document.getElementById("pari").onclick = function() {
    document.getElementById("cpuNum").innerHTML = ""
    document.getElementById("warning").innerHTML = ""
    document.getElementById("sum").innerHTML = ""
    document.getElementById("resultCont").innerHTML = ""
    let userNum = parseInt(document.getElementById("userNum").value)
    let choice = "pari"    
    if (userNum > 0 && userNum <= 5) {
        playGame(userNum, choice)
    }
    else {
        document.getElementById("warning").innerHTML = "inserire un numero da 1 a 5"

    }
} 
document.getElementById("dispari").onclick = function() {
    document.getElementById("cpuNum").innerHTML = ""
    document.getElementById("warning").innerHTML = ""
    document.getElementById("sum").innerHTML = ""
    document.getElementById("resultCont").innerHTML = ""
    let userNum = parseInt(document.getElementById("userNum").value)
    let choice = "dispari"    
    if (userNum > 0 && userNum <= 5) {
        playGame(userNum, choice)
    }
    else {
        document.getElementById("warning").innerHTML = "inserire un numero da 1 a 5"
        document.getElementById("results").classList.add = "d-none"
    }
} 


/* leggo il numero dell'utente */
/* controllo che sia compreso tra 1 e 5 */

function playGame(num, choice) {
    /* genero un numero random per il computer */
    let cpuNum = Math.floor((Math.random() * 5 + 1))
    document.getElementById("cpuNum").innerHTML = cpuNum
    
    /* sommo e controllo se pari o dispari */
    let sumNumbers = num + cpuNum
    document.getElementById("sum").innerHTML = "somma: " + sumNumbers
    if (sumNumbers % 2 == 0 && choice == "pari") {
        document.getElementById("result").innerHTML = "hai vinto"
    }
    else if (sumNumbers % 2 == 0 && choice == "dispari") {
            document.getElementById("result").innerHTML = "hai perso"

    }
    if (sumNumbers % 2 != 0 && choice == "pari") {
        document.getElementById("result").innerHTML = "hai perso"
    }
    else if (sumNumbers % 2 != 0 && choice == "dispari") {
            document.getElementById("result").innerHTML = "hai vinto"

    }
}
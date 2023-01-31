/* Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/* onclick */
document.getElementById("button").onclick = function() {
    let wordToCheck = document.getElementById("word").value
    palindroma(wordToCheck)
}

function palindroma(word) {
    document.getElementById("checkWord").innerHTML = ""
    document.getElementById("printWord").innerHTML = ""

    /* dichiaro un array per la parola inserita*/
    let wordArray = []
    /* dichiaro un array per la parola reverse */
    let reverseArray = []
    /* dichiaro una variabile di verifica per salvare se la parola è palindroma */
    checkVerify = 0

    /* salvo la sua lunghezza */
    wordLength = word.length
    
    /* inserisco le lettere della parola nell'array e nell'array reverse*/
    for (i = 0; i < wordLength; i++) {
        wordArray[i] = word[i]
        reverseArray[(wordLength - 1) - i] = word[i]
    }

    /* controllo in base alla lunghezza della parola se i valori dei due array coincidono e stampo la parola reverse */
    let checkArray = []
    for (i = 0; i < wordLength; i++)
    if (wordArray[i] == reverseArray[i]) {
        checkArray[i] = true
        document.getElementById("printWord").innerHTML += '<p>' + wordArray[i] + "</p>"
        document.getElementById("checkWord").innerHTML += '<p class="green">' + wordArray[i] + "</p>"
    }
    else {
        checkArray[i] = false
        document.getElementById("printWord").innerHTML += '<p>' + wordArray[i] + "</p>"
        document.getElementById("checkWord").innerHTML += '<p class="red">' + wordArray[i] + "</p>"
        checkVerify += 1
    }

    if (checkVerify != 0){
        document.getElementById("checkResult").innerHTML = "La parola non è palindroma."
    }

    else {
        document.getElementById("checkResult").innerHTML = "La parola è palindroma."
    }
    
}
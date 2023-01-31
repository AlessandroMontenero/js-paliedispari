/* Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/* onclick */
document.getElementById("button").onclick = function() {
    let wordToCheck = document.getElementById("word").value
    console.log(palindroma(wordToCheck))
}

function palindroma(word) {
    /* dichiaro un array per la parola inserita*/
    let wordArray = []
    /* dichiaro un array per la parola reverse */
    let reverseArray = []

    /* salvo la sua lunghezza */
    wordLength = word.length
    
    /* inserisco le lettere della parola nell'array e nell'array reverse*/
    for (i = 0; i < wordLength; i++) {
        wordArray[i] = word[i]
        reverseArray[(wordLength - 1) - i] = word[i]
        console.log(wordArray)
        console.log(reverseArray)
    }

    /* controllo in base alla lunghezza della parola se i valori dei due array coincidono */
    let checkArray = []
    for (i = 0; i < wordLength; i++)
    if (wordArray[i] == reverseArray[i]) {
        checkArray[i] = true
    }
    else {
        checkArray[i] = false
        return false
    }
    console.log(checkArray)
}

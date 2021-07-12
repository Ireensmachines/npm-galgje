function displayWordSoFar(word, guesses) {
    let output = ""
    for (let i = 0; i < word.length; i++) {
        const letter = word.charAt(i)

        if (guesses.includes(letter)) {
            output += letter + " "
        } else {
            output += "_ "

        }

    }

    return output
}


//loop over each character in word
function isGameWon(word, guesses) {
    for (let i = 0; i < word.length; i++) {
        const letter = word.charAt(i)

        if (!guesses.includes(letter)) {
            return false
        }

    }
    return true
}


// count how many letter are wrong
function isGameLost(word, guesses) {
    let counter = 0
    for (let i = 0; i < guesses.length; i++) {
        if (!word.includes(guesses[i])) {
            counter++
            if (counter >= 7) {

                return true
            }
        }
    }
return false
}


module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
};

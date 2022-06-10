/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(text) {
    let word = text.toLowerCase()
    let wordPal = word.split('').reverse().join('')
    // console.log(wordPal)

    if(word === wordPal){
        return true
    }
}





module.exports = palindromeChecker;
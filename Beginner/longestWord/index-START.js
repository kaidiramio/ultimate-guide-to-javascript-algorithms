/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// param = string of text 

// result = returns text in a reversed format

// example = reverseString('algorithms') // should return 'smhtirogla'

// prep = 

function longestWord(text) {
    return text.split(' ').reverse().join()
}

module.exports = longestWord
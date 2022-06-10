/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// Parameter // text --> string 
// Return // string 
// Example // reverseString('algorithms') // should return 'smhtirogla'
// Psuedo Code  //

// returing param and using the split method it will be made into an array of characters - because there's no space ('')
// Using the reverse method we reversed those characters and they do not have a space between each character
// Lastly, we join the seperated text which will display these characters in reversed order. 



function reverseString(text) {
    return text.split('').reverse().join('')
}

module.exports = reverseString
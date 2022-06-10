/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    // Code goes here
    // split the text
    //loop through text
    // as we loop we take into account how many characters are in each array
    let num = 0
    let str = ''
    text.split('').forEach( x => {
        if( text.split(x).length > num){
            num = text.split(x).length
            str = x
        }
    })
    return str
}

module.exports = maxRecurringChar;
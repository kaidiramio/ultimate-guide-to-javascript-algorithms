/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text){
  // cap sentence is a function
  // turns word into array (characters of word are index easier to target)
  const allCap = text.toLowerCase().split(' ')

  // new empty array  
  let capsArr = []

  // 
  allCap.forEach(function(capWord){
    capsArr.push(capWord[0].toUpperCase() + capWord.slice(1))
  })

  return capsArr.join(' ')
}

module.exports = capSentence

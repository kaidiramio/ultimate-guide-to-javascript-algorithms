/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/



function getCount(str) {
  
    // definte variables 
      let vowelsCount = 0;
      
    //   vowels
      let vowels = ["a", "e", "i", "o", "u"]
    
    //   loop through string and see if each character is a vowel
      for(let character of str .toLowerCase()){
        if(vowels.includes(character)){
          vowelsCount++
          
    //        inside the for loop, we can look at and go over each character in the string.
    // The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
    //       increased the number we stored in vowelsCount if it was
        }
      }
      
      return vowelsCount;
}




module.exports = getCount;

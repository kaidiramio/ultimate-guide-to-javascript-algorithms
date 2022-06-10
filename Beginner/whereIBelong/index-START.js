/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

//P number arr + num
//R lowest index (2nd arg) inserted into array (first arg) NUMBER
//E whereIBelong (([1, 1.5, 2,3,4], 1.5)) // should return number 1 because it's greater than 1(index [0]), but less than 2 (index [1]).
//Psuedo code


function whereIBelong(arr, num) {
  // variable assorted with method sort applied 
   let assorted = arr.sort()
  
   //  loop through array and run conditional
   for(let i = 0; i < assorted.length; i++){
    
    //  conditional for arr and index. if num is <= arr's index return i (the number)
    if(num <= arr[i]){
      return i
    }

    // return assorted.length 
   }return assorted.length
 }

module.exports = whereIBelong
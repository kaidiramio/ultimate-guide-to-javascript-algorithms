/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

// PREP 

// n = number
// number to create a factorial solution
// n = 5, 1x2 


// factorials multipied by 1
// i = assignment operator


function factorial(n) {
    // declare variable for x
   let x = 1

//for loop to loop through n
   for( let i = 1; i <= n; i++){
    //    x* = i 1x 1, 1x 2, 2x 3, 6x 4 (increases and each answer is reassigned)
    
    // x reassigned everytime
       x*=i
    //    x times i
   }
   return x
}

module.exports = factorial
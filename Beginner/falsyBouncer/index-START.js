/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// PREP

// array = values (string, num)
// return an array of only truthy values.
// E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]


function falsyBouncer(array) {
    // Code goes here
    return array.filter(el => el)

    // filter automatically checks for a boolean
}





module.exports = falsyBouncer
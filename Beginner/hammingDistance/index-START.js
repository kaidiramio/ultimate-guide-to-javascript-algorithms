/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

// In information theory, the Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. 

//  In a more general context, the Hamming distance is one of several string metrics for measuring the edit distance between two sequences.

function hammingDistance(stringA, stringB) {
    let distance = 0
    if( stringA.length !== stringB.length){
        return 0
    }
    for(let i = 0; i< stringB.length;i++){
        if(stringA[i] !== stringB[i] ){
            distance += 1
        }
    } return distance
     
}


module.exports = hammingDistance
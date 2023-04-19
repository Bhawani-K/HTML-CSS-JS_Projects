// 1. String Templates
function returnName(fName, lname) {
    // return fName + ''+ lname   complex for larger data
    return `${fName} ${lname}`    // ES-6 feature for template literal
}

// 2. typeOf
typeof 'abc'  //string
typeof 10     // number
typeof []     // object
typeof {}     // object

// isArray, can be used to check the typeOf Array
Array.isArray([10, 20])  // true
Array.isArray({ 10: true, 20: false })  //false

// isNaN
isNaN('abc')    // true
isNaN(122)      // false
isNaN('122')   // false

// Ternary operator
canVote = votersAge >= 18 ? 'can vote' : 'cannot vote';

// == vs ===
// == checks only value
10 == '10'  // true
// ===  checks value and type
10 === '10'   //false

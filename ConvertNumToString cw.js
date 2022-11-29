/* Codewars: Convert a Number to a String!

We need a function that can transform a number (integer) into a string. */

const numberToString = (num) => {
  if (typeof num == "number") {
    return(num.toString())
  } 
  else {
    return('Not a number')
  }
}

// //TESTS
// numberToString(10)
// numberToString(756)
// numberToString(-462.35)

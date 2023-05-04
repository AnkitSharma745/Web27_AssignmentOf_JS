// Problem 1
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)


let isOdd = (num) => {
  if (num % 2 == 1) {
    return true
  }
  else {
    return false
  }
}
let x = isOdd(2)
console.log(x)
let n = 12
for (let i = 0; i <= n; i++) {
  if (isOdd(i)) {
    console.log(i)
  }
}
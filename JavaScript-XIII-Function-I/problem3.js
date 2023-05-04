// Problem-3
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)


function isOdd(num) {
  let flag = false
  if (num % 2 == 1) {
    flag = true
  }
  return flag
}
console.log(isOdd(3))
let num = 10
for (let i = 0; i <= num; i++) {
  if (isOdd(i)) {
    console.log(i)
  }
}
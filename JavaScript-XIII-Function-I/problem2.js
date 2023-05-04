// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
function difference(a, b) {
  return a - b
}
function findabs(diff) {
  if (diff < 0) {
    return -diff
  }
  else {
    return diff
  }
}
let x = difference(8, 10)
let y = findabs(x)
console.log(y)


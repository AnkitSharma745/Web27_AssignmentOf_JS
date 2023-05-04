// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


let lower = (char) => {
  let lower = "abcdefghijklmnopqrstuvwxyz"
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let j = 0; j < lower.length; j++) {
    if (char == upper[j]) {
      return lower[j]
    }
  }
}
let x = lower("A")
console.log(x)

let arr = ["MA", "SA", "I", "SCH", "OOL"]
let array = []
for (let i = 0; i < arr.length; i++) {
  let x = arr[i]
  let bag = ""
  for (let j = 0; j < x.length; j++) {
    bag += lower(x[j])
  }
  array.push(bag)
}

console.log(array)
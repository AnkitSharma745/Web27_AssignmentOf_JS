// Problem-5
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

// creating a function to convert the char in to lower case
function upper(char) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lower = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < lower.length; i++) {
    if (char == upper[i]) {
      return lower[i]
    }
  }
}
// testing the function for a single character
let x = upper("G")
console.log(x)
// let's check the function with word and convert the word in to lower case word
let str = "DGD"
let bag = ""
for (let i = 0; i < str.length; i++) {
  let x = upper(str[i])
  bag = bag + x
}
console.log(bag)
// same function using for an array  to covert the each element of upper case character into lower case word and print the whole array
let arr = ["MA", "SA", "I", "SCH", "OOL"]
let final_element = []
for (let i = 0; i < arr.length; i++) {
  let x = arr[i]
  let element = ""
  for (let j = 0; j < x.length; j++) {
    element = element + upper(x[j])
  }
  final_element.push(element)
}

console.log(final_element)

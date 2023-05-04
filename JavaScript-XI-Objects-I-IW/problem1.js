// Given an array find the unique items in the array

let arr = [4, 2, 4, 53, 2, 4, 3, 2, 1, 1, 1, 3, 2, 2]
let obj = {}
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1
  }
  else {
    obj[arr[i]]++
  }
}
for (let key in obj) {
  if (obj[key] == 1) {
    console.log(key)
  }
}
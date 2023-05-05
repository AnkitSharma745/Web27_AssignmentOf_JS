// Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)

let arr=[1,2,3,4,5,6]
let div = arr.filter(function(a){
  if(a%3==0){
    return a
  }
})
let cube = div.map(function(a){
  return a*a*a
})
let sum= cube.reduce(function(a,b){
  return a+b
})
console.log(sum)

// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

let arr=[1,2,3,4]
let odd= arr.filter(function(a){
  if(a%2==1){
    return a
  }
})
let sum= odd.reduce(function(a,b){
  return a+b
})
console.log(sum)
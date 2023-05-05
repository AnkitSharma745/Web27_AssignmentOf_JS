// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]

let arr=[1,2,3,4,5,6,7,8,9]
let a= arr.filter(function(x){
  if(x%2==1){
    return x
  }
})
console.log(a)
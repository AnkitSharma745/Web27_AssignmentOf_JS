
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

let findsum= (arr)=>{
  let sum=0
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  return sum
}
let array=[2,3,4,255,3,564]
let x = findsum(array)
console.log("The average of the array elements",x/array.length)
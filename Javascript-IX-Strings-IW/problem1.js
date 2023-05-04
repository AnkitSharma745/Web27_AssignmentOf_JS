// Problem 1 : Given a string count the number of words in that string
let sentence="The masai verse is one of the best champ"
let count=1
for(let i=0;i<sentence.length;i++){
  if(sentence[i]==" "){
    count++
  }
}
console.log(count)

//Another method to do this question
let arr=[]
arr=sentence.split(" ")
console.log(arr.length)
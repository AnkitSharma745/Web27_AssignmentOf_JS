let arr=["assignment", "problem", "media", "upload"]
let a = arr.filter(function(a){
  if(a[0]=="a"|| a[a.length-1]=="a"){
    return a
  }
})
console.log(a)
let str = "ankitskaskdassefd"
let obj = {}
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]] == undefined) {
    obj[str[i]] = 1
  }
  else {
    obj[str[i]]++
  }
}
for (let key in obj) {
  console.log(key + ":" + obj[key])
}
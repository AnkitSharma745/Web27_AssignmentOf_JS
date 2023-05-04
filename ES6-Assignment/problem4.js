let convert = (char) => {
  let bag
  let lower = "abcdefghijklmnopqrstuvwxyz"
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let i = 0; i < lower.length; i++) {
    if (char == lower[i]) {
      bag = upper[i]
    }
    else if (char == upper[i]) {
      bag = lower[i]
    }
  }
  return bag
}
console.log(convert("K"))
let bag = ""
let str = "Test"
for (let i = 0; i < str.length; i++) {
  bag = bag + convert(str[i])
}
console.log(bag)



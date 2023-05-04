let n = 8
let bag = ""

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1) {
      bag += "*";
    }
    else {
      if (j === 0 || j === n - 1) {
        bag += "*";
      }
      else {
        bag += " ";
      }
    }
  }
  bag += "\n";
}
console.log(bag);
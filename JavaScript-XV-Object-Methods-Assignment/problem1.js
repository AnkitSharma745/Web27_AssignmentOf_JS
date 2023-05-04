// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let obj = {
  len: 2,
  br: 3,
  area: function() {
    console.log(this.len * this.br)
  },
  peri: function() {
    console.log(2 * (this.len + this.br))
  }
}
obj.area()
obj.peri()

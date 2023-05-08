class Shape {
  draw() {
    console.log("drawing a figure");
  }
}

class Circle extends Shape {
  draw(radius) {
    console.log(`Drawing ${radius} radius circle `);
  }
}

let shapeOBJ = new Shape();
let circleOBJ = new Circle();
console.log(shapeOBJ.draw());
console.log(circleOBJ.draw(5));

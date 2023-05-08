class Car {
  #privateColor; //private gibi ? , protected gibi ?
  constructor(color, privateColor) {
    this.#privateColor = privateColor;
    this.color = color;
  }
  privateColorGET() {
    return this.#privateColor;
  }
  privateColorSET(par) {
    this.#privateColor = par;
  }
}

let carOBJ = new Car("pink", "private grey");
console.log(carOBJ.color);
carOBJ.privateColorSET("private gulu gulu");
console.log(carOBJ.privateColorGET());

class Car {
  constructor(color) {
    this.color = color;
    this.speed = 0;
  }
  accelerator(par) {
    this.speed = this.speed + par; //this.speed+= par;
  }
}

let carOBJ = new Car("blue");
console.log(carOBJ.color);

carOBJ.accelerator(251);
console.log(carOBJ.speed);
console.log("\n");

class SuperCar extends Car {
  constructor(money, color) {
    super(color);
    this.money = money;
  }
}

let superCarOBJ = new SuperCar("1.2M $","red");
console.log(superCarOBJ.color);
console.log(superCarOBJ.money);
superCarOBJ.accelerator(345)
console.log(superCarOBJ.speed);
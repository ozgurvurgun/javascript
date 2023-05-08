/*
let car = { // car = object
  color: "blue", //color - speed = property
  speed: 380,
};
console.log(car.speed);
*/

/*
let car = {
  color: "black",
  speed: 200,
  accelerator: function (par = 10) {
    //accelerator method
    this.speed += par;
  },
};
car.accelerator(100);
console.log(car.speed);
*/

//constructer
function Car(color) {
  //properties
  this.color = color;
  this.speed = 0;
  //methods
  this.hello = function (name = "default name") {
    console.log("hello " + name);
  };
}

//prototype ile bu şekilde sonradan
//metod eklenebilir

//prototip ile metod ve ozellik olusturmak bellek
//kullanımı acısından iyidir. cunku sınıfta referans
//olarak tutulur. ve cagrıldıgında kullanılır
Car.prototype.accelerator = function (par) {
  this.speed += par;
};

//prototype ile yeni özellikte eklenebilir
Car.prototype.frictionValue = "0.86";

const carObject = new Car("red");
console.log(carObject.color);
carObject.accelerator(100);
console.log(carObject.speed);
carObject.hello("ozgur");
console.log("\n");

//miras alma
function SportCars(color, speed) {
  Car.call(this, color, speed);
}

const sportCarsObject = new SportCars("blue", "400");
//eğer fonksiyon prototip olarak eklendiyse
//by sekilkde cagıramazsın
sportCarsObject.hello("melike");
//sportCarsObject.accelerator(150); // bu hata fırlatır cunku ebeveyn sınıfa prototip olarak eklendi bu şekilde çağrılamaz

//ebeveyn sınıfın prototiplerini miras alma
SportCars.prototype = Object.create(Car.prototype);
let newSportCarsOBJ = new SportCars("blue", "400");
newSportCarsOBJ.accelerator(356);
console.log(newSportCarsOBJ.speed);

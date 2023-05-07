let fruit = [
  "apple",
  "pear",
  "banana",
  "pineapple",
  "raspberry",
  "strawberry",
  "peach",
];
console.log("for ile dizi yazdırma");
for (let i = 0; i < fruit.length; i++) {
  let j = i + 1;
  console.log(`${j}- ${fruit[i]}`);
}
console.log("\n");

//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!
console.log("for ile dizi değerlerini toplama");
let numbers = [10, 20, 30, 15, 20, 90];
var result = 0;
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}
console.log("= " + result);
console.log("\n");

//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!
console.log("forin kullanımı");
for (const i in numbers) {
  //forin indisi verir
  console.log("-- " + numbers[i]);
}
console.log("\n");

//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!
console.log("for of kullanımı");
for (const i of numbers) {
  //for of değeri verir
  console.log("** " + i);
}
console.log("\n");

//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!
console.log("for in ile obje yazdırma");
const user = {
  name: "ozgur",
  surname: "vurgun",
  email: "oz@oz.com",
  age: 23,
};
for (const key in user) {
  console.log(user[key]);
}
console.log("\n");

//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!
console.log("for ile çoklu obje yazdırma");
const users = [
  {
    id: 0,
    name: "Ozgur",
    surname: "Vurgun",
    location: {
      city: "Izmir",
      county: "Buca",
      hobbys: ["computer", "science"],
    },
  },
  {
    id: "my heart",
    name: "Ece",
    surname: "Sensoz",
    location: {
      city: "Izmir",
      county: "Kemalpasa",
      hobbys: ["art", "history"],
    },
  },
  {
    id: 2,
    name: "Jessica",
    surname: "smith",
    location: {
      city: "United States",
      county: "Los Angeles",
      hobbys: ["cartoon", "tennis"],
    },
  },
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].location.hobbys);
}
console.log("\n");

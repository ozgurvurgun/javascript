/*
spread operator , bir dizi veya obje içinde ki elemanları
başka bir dizi veya objeye aktarmamızı sağlar
*/
const Number1 = [1, 2, 3];
const Number2 = [...Number1, 4, 5, 6];
console.log(Number2);

//fonksiyon ile kullanımı
console.log("\n");
const Numbers = [1, 2, 5];
const Add = (x, y, z) => x + y + z;
console.log(Add(...Numbers));

//obje ile kullanımı
console.log("\n");
const obj1 = { name: "ece", age: 23 };
const obj2 = { ...obj1, age: 30, job: "art historian" }; //kopyalanan obje en sağda olursa ve içinde ki anahtar bu objede de var ise override edilir
console.log(obj2); //en sol da tanımlanırsa geçerli değerler sayılır

//destructuring
console.log("\n");
const obj = { name: "özgür", age: 27, job: "developer" };
const { name, age } = obj;
const newObj = { name, age };
console.log(newObj);

//!
console.log("\n");
const obj3 = { name: "john", age: 30 };
const { name: firstName } = obj3; // bu şekilde obje key adı değişitirilebilir
console.log(firstName);

//!
console.log("\n");
const numbers = [1, 2, 3, 4, 5, 6];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3,4,5,6]

//! arrow functions
const sayHello = (name) => {
  console.log(`hello ${name}`); //tek satırda "{}" gerekmez
};
sayHello("balım");

//! array methods

//map
console.log("\n");
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //butun degerleri doner
const Squares = Numbers.map((x) => x * x);
console.log(Squares);

//filter
console.log("\n");
const Cift_sayilar = Numbers.filter((x) => x % 2 === 0); //filtreleme islemi
console.log(Cift_sayilar);

//reduce
console.log("\n");
const Sum = Numbers.reduce((acc, x) => acc + x, 0); //0 baslangic degeri acc degiskenine atanir
console.log(Sum);

//find
console.log("\n");
const Find_number = Numbers.find((x) => x > 2); //tek deger doner
console.log(Find_number);

//some
console.log("\n");
const Is_big_number_exist = Numbers.some((x) => x > 10); // dizi icinde kritere uygun elemanlari bu metodla buluruz
console.log(Is_big_number_exist); //true,false doner

//every
console.log("\n");
const Is_all_even = Numbers.every((x) => x % 2 === 0); //butun degerlere bakar, kosul butun degerler icin gecerli ise true,false doner
console.log(Is_all_even); //true,false doner
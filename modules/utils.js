const hello = () => {
  return `hello world`;
};

export const name = "ozgur";
export let sayHi = (name) => `hello ${name}`;
export default hello;

/* 
  çoklu export

  export { sayHi, name };
*/

/* 
  takma isimle export

  export { sayHi as merhabaDe, name };

  aynı kullanımla import ederken de isimlendirme
  yapılabilir.
*/

/*
  herşeyi import etmek

  import * as Utils from "./utils.js";
  Utils.name;
  Utils.sayHi('ozgur');

  eğer default ise (fonksiyon)
  Utils.default();

  eğer default ise (property)
  Utils.default;
*/

/*
 dinamik import

*/

/* 
  default olarak export edilen ögeler farklı
  isimlendirmeler ile import edilebilir. default 
  olmayan export edilen ögeler aynı isimle import
  edilmek zorundadır
*/

/* 
  default olmadan export edilen ögeler süslü parantez
  kullanılarak import edilir.
*/

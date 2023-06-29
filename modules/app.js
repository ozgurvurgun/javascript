import hello from "./utils.js";
import { name, sayHi } from "./utils.js";

console.log(hello());
console.log(name);
console.log(sayHi("ece"));

const btn = document.getElementById("btn");

/* 
   dinamik import 

   btn.addEventListener("click", () => {
   import("./utils.js").then((module) => console.log(module));
   });
*/

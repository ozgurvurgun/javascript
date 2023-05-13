console.log("process one");
setTimeout(() => {
  console.log("process two");
}, 2000);
console.log("process three");

//callback function

function sayHello(name,callback) {
  console.log("\n");
  console.log(`hello ${name}`);
  callback();
}
function goodbye() {
  console.log("goodbye");
}
sayHello("ece",goodbye);

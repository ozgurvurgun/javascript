// void (function writer() {
//   console.log("void function runnig\n");
// })();

/*////////////////////////////////////////*/
function sum(...par) {
  let result = 0;
  par.forEach((element) => {
    result += element;
  });
  return result;
}
console.log(sum(10, 20, 10)); //infinity parameter

/*////////////////////////////////////////*/
function ageCalculateer(bornYear) {
    let year = new Date().getFullYear();
    console.log(year - bornYear);
}
ageCalculateer(2022);
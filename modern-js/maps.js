const map = new Map();
map.set("name", "ece");
map.set("age", 23);
map.set("job", "Developer");

console.log(map);
console.log("\n");

console.log(map.get("name"));
console.log("\n");

map.delete("job");
console.log(map);

console.log("\n");
map.forEach((value, key) => console.log(`${key}: ${value}`));

//!sets
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);
console.log(set); //duplicate value will not be added
set.delete(2);
console.log(set.has(2));
console.log(set);
set.forEach((value) => console.log(value));

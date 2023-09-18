let newMap = new Map()
newMap.set("name","suryansh")

console.log(newMap);

newMap.set("address","goa");
console.log(newMap);

newMap.set("mobile",9555105916)
console.log(newMap);

console.log("number of element in map=",newMap.size);

const studentName = newMap.get('name');
console.log("Name from Map is",studentName);

newMap.set(1,"First")
console.log(newMap);

let valOf = newMap.get(1);
console.log("val of 1 is",valOf1);

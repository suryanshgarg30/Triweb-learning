let name1 = {name:"hi"}
m = {[name1]:"suryansh"}
name1="my name"
name2={name:"hi"}
console.log(m[name2]);
console.log(m);

let wMap = new WeakMap()
obj1 = {}
obj2 = {1:1}
obj3 = {2:2}
wMap.set(obj1,"val1")
wMap.set(obj2,"val2")
wMap.set(obj3,"val3")

let v1 = wMap.get(obj1);
console.log(v1);
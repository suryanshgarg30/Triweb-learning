let obj = {name:"suryansh",address:"india"}

console.log(obj.__proto__);

let obj1 = Object.create(obj);
obj1.name = "rahul";
console.log("obj1.__proto__",obj1.__proto__);
obj1.display = function(){
    console.log(`${this.name} lives in ${this.address}`);
}
let obj2 = Object.create(obj);
console.log("obj2.__proto__",obj2.__proto__);
obj2.name= "vijay"
console.log("obj2.__proto__",obj2.__proto__.name);

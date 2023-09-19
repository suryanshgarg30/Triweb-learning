//Destructuring assignment

let arr=[1,2,3,4,5];
let[a,b]=arr;

console.log("first element:",a);
console.log("second element:",b);

[b,a]=[a,b];
console.log("first element:",a);
console.log("second element:",b);

//Object Matching, Shorthand Notation

function get(){
    let student={
        sname: "suryansh",
        age: 20,
        course: "XYZ"
    }
    return student;
}
var {sname,age,course}=get();
console.log(sname,age,course);
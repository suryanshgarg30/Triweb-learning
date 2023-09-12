function updateName(student){
    student.name = 'hi ' + student.name;
    console.log(student);
}

let objS = {name: "suryansh"};
updateName(objS);
console.log("old object is ", objS);
//pass by reference

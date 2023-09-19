let arr = [1,3,4,6,7];
let [a,b] = arr;
console.log('a=',a,'b=',b);

//swap a and b

[a,b] = [b,a];
console.log('a=',a,'b=',b);
console.log(arr);

//Shorthand notation, Object matching

function getstd(){
    let std = {
        uname:'Madhav',
        age:22
    }
    return std;
}
var {uname,age} = getstd();
console.log(uname,age); 

//Object matching ,deep matchin

function getinfo(){
    let emp ={
        ename:'Dinesh',
        income:23000,
        place :{
            city:'kanpur',
            code: 404040
        }
    }
    return emp;
}
var {ename:employee,income:employeesalary,place:{city:cityname,code:pincode}} = getinfo();
console.log(employee,employeesalary,cityname,pincode);
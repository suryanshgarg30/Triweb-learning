//Default parameter

function addition(n,m=3)
{
    return n+m;
}

let sum1= addition(1,2);
console.log("Sum1= ",sum1); //3

let sum2= addition(1);
console.log("Sum2= ",sum2); //4

// Rest Parameter

function display(...num) // '...' = rest paramter
{
    return num;
}
let a= display(1,2,3);
console.log("",a);
let b= display(1);
console.log(b);
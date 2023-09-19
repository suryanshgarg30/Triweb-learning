//extended parameter handling

//1 default parameter values

function addTwoNumber(n1,n2=0){
    return n1 + n2;
}
let sum1 = addTwoNumber(1,2);
console.log("sum =", sum1);//3

let sum2 = addTwoNumber(2);
console.log("sum = ",sum2);
//Without default parameter -> sum = NaN
// With default parameter ->
 
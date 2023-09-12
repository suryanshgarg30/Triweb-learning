function printNumSeries(num){
    for(let i = num; i>0; i--){
        console.log(i);
    }
}
printNumSeries(5);


console.log("using Rec")
function printNumSeriesRecursion(num){

    if(num == 0){
        return 0 ;
    }
    console.log(num);
    num--;
    printNumSeriesRecursion(num);

}
printNumSeriesRecursion(5);
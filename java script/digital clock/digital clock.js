(function getDigitalTime(){
    let dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds =  dt.getSeconds();

    let hour12 = hours>12? hours-12 : hours;
    if(hours == 0){
        hour12 = "12"
    }
    let time="";
    time += hour12<10?"0"+hour12:""+hour12;
    time += minutes<10?":0"+minutes:":"+minutes;  //turnary operator
    time += seconds<10?":0"+seconds:":"+seconds;
    time += hours>12? " PM" : " AM";
    console.log(time);
})()
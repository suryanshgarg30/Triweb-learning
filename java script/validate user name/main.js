var username = prompt("Enter Your Name");
var h1Tag = document.querySelector('h1')

function setUserName(userName){
    if(userName == null || userName.length == 0 ){
        alert("please Enter Your Name")
    } else{
        console.log(userName.length);
        h1Tag.textContent = userName; 
    }
   
}

setUserName(username);
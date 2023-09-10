function validateUser(name,password){
    if(name ==""){
        console.log("invalida user name");
        return;
    } else if(password == "" || passwprd.length < 8){
        console.log("invalida password");
        return;
    }

    console.log("Yes successfully validated");
}
 let username = "suryansh"
 let userpassword = "abcd1234"
 validateUser(username,userpassword);
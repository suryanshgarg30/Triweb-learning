const db = require('../util/datatbas');
module.exports.insert = (userData) =>{
    //console.log(userData)
    let query = "INSERT INTO `users`( `name`, `email`, `password`, `remark`) VALUES (?,?,?,?)";
    db.execute(query,[userData.name, userData.email,userData.password,userData.remark]);
    //execute 
    //result return
    return true;
}
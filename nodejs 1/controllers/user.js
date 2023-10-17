const userModel = require('../model/user');

//register
module.exports.register = async (req,res) =>{

    try{
   let response =await userModel.create(req.body);
    res.send({status:"success", data:{id:resourceLimits.datavalue.id}});
}catch (error){
    res.send({status:"error",message:"User registration failed"});
}
}

//get
module.exports.get =async (req,res) =>{
    try{
    let data = await userModel.findByPk(req.body.id);
    res.send({status:"error",data:data});
}catch (error){
    res.send({status:"error",message:"User not found"});
}
}

//update
module.exports.update = async (req, res) => {
    try{
        let user = await userModel.findByPk(req.body.id);
        user.password= req.body.password;
        await user.save();
        res.send({status:"success",message:"User data updated"});
    }catch (error) {
        //log
        res.send({status:"error",message:"User not updated"});
    }
  };

//delete
module.exports.delete =async (req,res) =>{
    try{
        let user = await userModel.findByPk(req.body.id);
        await user.destroy();
        res.send({status:"sucesss", message:"User deleted!"});
    } catch (error){
        res.send({status:"error",message:"User not deleted"});
    }
    
}
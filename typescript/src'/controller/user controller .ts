import { Request, Response } from 'express';

import {addUserToDB, updateUserData} from '../model/user model';

const registerUser = (req:Request,res:Response) => {

    const userName = "Rajesh";
    const password = "1123";
    
    const result = addUserToDB(userName,password);
    res.send(result);
} ;

const updateUser = (req:Request,res:Response) => {
    const myuser = {
        id:1,
        user_name:'kamlesh',
        email:'kamlesh@gmail.com',
        password:'abcd'
    }
    const result = updateUserData(myuser);
    res.send(result);
}

export {registerUser,updateUser};
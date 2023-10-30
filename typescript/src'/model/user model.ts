const addUserToDB = (userName:string, password:string) => {

    console.log(userName,password);
    return "Registeration done";
};

interface User {
    id:number,
    user_name:string,
    email:string,
    password:string
};

const updateUserData = (objUser:User) => {

    console.log(objUser.user_name);
    return "Done";
}
export  {addUserToDB,updateUserData};
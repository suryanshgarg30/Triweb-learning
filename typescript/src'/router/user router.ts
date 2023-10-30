const express = require('express');
//const userController = require('../controller/user');
import {registerUser,updateUser} from '../controller/user controller ' ;
const router = express.Router();

router.use('/register', registerUser);

router.use('/update', updateUser);


export default router;
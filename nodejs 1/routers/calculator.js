const express = require('express');
const calculatorController = require('C:\Users\surya\OneDrive\Documents\Github\nodejs 1\routers\calculator.js');
const router = express.Router();


router.post('/add',calculatorController.add);

router.post('/subtract',calculatorController.subtract);

router.post('/multiply',calculatorController.multiply);

router.post('/divide',calculatorController.divide);



module.exports = router;
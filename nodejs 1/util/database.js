const sequelize = require('sequelize');

const sequelize=new sequelize("workshop","root","",{
    dialect:"mysql",
    host:"localhost",
});

module.export = sequelize;
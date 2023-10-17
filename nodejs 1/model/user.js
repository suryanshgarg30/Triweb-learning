const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User_database',{
    id:{
        type: Sequelize.INTEGER,
        autoIncreament:true,
        allowNull: false,
        primaryKey : true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false
    },
    remark: Sequelize.STRING
})

module.exports  = User;
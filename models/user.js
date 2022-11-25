const Sequelize = require('sequelize')
const sequelize = require('../util/database')
const role = require('./role')

const user = sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true ,
        primaryKey: true,
    },
    firstname: {
        type: Sequelize.STRING ,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING ,
        allowNull: false ,
    },
    email: {
        type: Sequelize.STRING ,
        allowNull: false ,
    },
    phonenumber: {
        type: Sequelize.INTEGER (12),
        allowNull: false ,
    },
    password:{
        type:Sequelize.STRING(200),
        allowNull:false
    },
    password_salt:{
        type:Sequelize.STRING(200),
        allowNull:********

    },
    suscribe:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    },
    status:{
        type:Sequelize.ENUM,
        values:['active','inactive','trash'],
        defaultValue:'active'
    },
    role_id:{
        type:Sequelize.INTEGER(11),
        references:{
            model:'role',
            key:'id'
        },
        defaultValue: 1
    }
},
{
    freezeTableName:true, timestamps: false
})
user.sync();

role.hasMany(user,{foreignKey:'role_id'});
user.belongsTo(role,{foreignKey:'role_id'});

module.exports = user ;

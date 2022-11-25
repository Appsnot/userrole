const Sequelize = require('sequelize')

const sequelize = new Sequelize('sample','root','password',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize

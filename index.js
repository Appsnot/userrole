const sequelize = require('./util/database')
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const roleController = require('./controllers/rolecontrollers.js')
const userController = require('./controllers/usercontrollers.js')

sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);``
})

app.listen(5000,() => console.log('express server is running at port no : 5000'));

app.get('/',(req,res) => {
    res.send('welcome')
})

//insert role
app.post('/roleinsert',roleController.roleInsert)

//insert user
app.post('/userinsert',userController.userInsert)

//get users
app.get('/users',userController.getUsers)

//get roles
app.get('/roles',roleController.getRoles)

//delete user
app.delete('/userdelete/:id',userController.deleteUser)

//delete role
app.delete('/roledelete/:id',roleController.deleteRole)

//update user
app.put('/userupdate/:id',userController.updateUser)

//update role
app.put('/roleupdate/:id',roleController.updateRole)

//get users by id
app.get('/users/:id',userController.getOneUser)

//get roles by id
app.get('/roles/:id',roleController.getOneRole)

//get role of a user
app.get('/roleofusers',userController.usersJoin)

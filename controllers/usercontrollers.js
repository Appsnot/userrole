const sequelize = require('../util/database')

const User = require('../models/user')

const userInsert = async (req,res) => {
    try{
        sequelize.sync({alter:true})
        await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: req.body.password,
            password_salt: req.body.password_salt,
            role_id: req.body.role_id
        })
        res.send('user inserted')
    }catch(err){
        console.log(err)
    }

}

const getUsers = async(req,res) => {
    try{
        const data = await User.findAll();
        res.send(data);
    }catch(err){
        console.log(err)
    }
}

const deleteUser = async(req,res) => {
    try{
        await User.destroy({where: {id: req.params.id}})
        res.send('user deleted');
    }catch(err){
        console.log(err)
    }
} 

const updateUser = async(req,res) => {
    try{
        await User.update(req.body,{where: {id: req.params.id}})
        res.send('user updated');
    }catch(err){
        console.log(err)
    }                   
}

const getOneUser = async(req,res) => {
    try{
        const data = await User.findAll({where: {id: req.params.id}});
        res.send(data)
    }catch(err){
        console.log(err)
    }
}

const usersJoin = async(req,res) => {
    try{
        const data = await User.findAll({include :Role})
        res.send(data);
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    userInsert ,
    getUsers ,
    deleteUser ,
    updateUser ,
    getOneUser ,
    usersJoin
}

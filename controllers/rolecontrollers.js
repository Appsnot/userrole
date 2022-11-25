const sequelize = require('../util/database')

const Role = require('../models/role')
const role = require('../models/role')
// const role = require('../models/role')

const roleInsert = async (req,res) => {
    try{
        sequelize.sync({alter: true})
        await Role.create({
            role_name: req.body.role_name
        })
        res.send('role inserted')
    }catch(err){
        console.log(err)
    }
}

const getRoles = async(req,res) => {
    try{
        const data = await Role.findAll();
        res.send(data);
    }catch(err){
        console.log(err)
    }
}

const deleteRole = async(req,res) => {
    // try{
        console.log("paraaaa", req.params.id)
        await Role.destroy({
            where: {id: req.params.id}
        })
        res.send("deleted")
        // res.send('role deleted', r);
    // }catch(err){
    //     console.log(err)
    // }
} 

const updateRole= async(req,res) => {
    try{
        await Role.update(req.body,{where: {id: req.params.id}})
        res.send('role updated');
    }catch(err){
        console.log(err)
    }
}

const getOneRole = async(req,res) => {
    try{
        const data = await Role.findAll({where: {id: req.params.id}});
        res.send(data)
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    roleInsert , 
    deleteRole ,
    updateRole ,
    getOneRole ,
    getRoles ,
}

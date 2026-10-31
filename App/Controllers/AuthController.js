const bcrypt = require('bcryptjs')
const employeeModel = require('../Models/employee.model')
const { name } = require('ejs')

exports.registerForm = (req,res)=>{
    res.render('registerForm')
}
 
exports.registerUser = async(req,res)=>{
    try{
        // const {name,email,password} = req.body;
        // const passHash = await bcrypt.hash(password,12)
        // await employeeModel.create({
        //     name,email,password:passHash
        // })
       
        req.body.password = await bcrypt.hash(req.body.password,12) 
        await employeeModel.create(req.body)
           res.redirect('/')
       }catch(error){
           res.status(400).json({
               success:false,
               message:error.message
           })
       }
}
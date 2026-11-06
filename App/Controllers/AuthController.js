const bcrypt = require('bcryptjs')
const employeeModel = require('../Models/employee.model')

const { name } = require('ejs')

exports.registerForm = (req,res)=>{
    res.render('registerForm')
}
 
exports.loginForm = (req,res)=>{
    res.render('loginForm')
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
 
exports.loginAuthUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await employeeModel.findOne({email})
        if(!user){
            return res.status(401,res.send("Invalid user"))
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
              return res.status(401,res.send("Invalid email or password"))
        }

        req.session.userID = user._id;
        res.redirect('/dashboard')
    }catch(error){
           res.status(400).json({
               success:false,
               message:error.message
           })
       }
}


exports.logout = (req,res)=>{
    req.session.destroy((error)=>{
        if(error){
            return res.status(500).send('Logout failed')
        }

        res.clearCookie('authID')
        return res.redirect('/login')
    })
}
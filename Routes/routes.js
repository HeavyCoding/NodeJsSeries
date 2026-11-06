const express = require('express')

const {employeeFetch,employeeCreate,employeeUpdate,employeeDelete} = require('../App/Controllers/EmployeeController')
const {isAuth} = require('../middlware/auth')
const {registerForm,registerUser,loginForm,loginAuthUser,logout} = require('../App/Controllers/AuthController')
let router = express.Router();
  
 router.get('/',registerForm)
 router.get('/login',loginForm)
 router.post('/register',registerUser)
 router.post('/login-auth',loginAuthUser)

 router.get('/dashboard',isAuth,(req,res)=>{
     res.render('dashboard')
 })

 router.get('/logout',logout)
 router.get('/api/employees',employeeFetch)
 router.post('/api/create-emp',employeeCreate)
 router.put('/api/update-emp/:id',employeeUpdate)
 router.delete('/api/delete-emp/:id',employeeDelete)

 module.exports=router;
const express = require('express')

const {employeeFetch,employeeCreate,employeeUpdate,employeeDelete} = require('../App/Controllers/EmployeeController')
 
const {registerForm,registerUser,loginForm,loginAuthUser} = require('../App/Controllers/AuthController')
let router = express.Router();
  
 router.get('/',registerForm)
 router.get('/login',loginForm)
 router.post('/register',registerUser)
 router.post('/login-auth',loginAuthUser)
 router.get('/api/employees',employeeFetch)
 router.post('/api/create-emp',employeeCreate)
 router.put('/api/update-emp/:id',employeeUpdate)
 router.delete('/api/delete-emp/:id',employeeDelete)

 module.exports=router;
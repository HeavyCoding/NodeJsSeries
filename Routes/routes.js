const express = require('express')

const {employeeFetch,employeeCreate,employeeUpdate,employeeDelete} = require('../App/Controllers/EmployeeController')
 
const {registerForm,registerUser} = require('../App/Controllers/AuthController')
let router = express.Router();
  
 router.get('/',registerForm)
 router.post('/register',registerUser)
 router.get('/api/employees',employeeFetch)
 router.post('/api/create-emp',employeeCreate)
 router.put('/api/update-emp/:id',employeeUpdate)
 router.delete('/api/delete-emp/:id',employeeDelete)

 module.exports=router;
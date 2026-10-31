
const employeeModel = require('../Models/employee.model')


let employeeFetch = async (req,res)=>{
   try{
    const emp= await employeeModel.find()
      
        return res.render('employee',{
            employee:emp
        })
        
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
 }

let employeeCreate = async (req,res)=>{
   try{
    const emp= await employeeModel.create(req.body)
        res.status(201).json({
            success:true,
            data:emp
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
 }

let employeeUpdate = async (req,res)=>{
   try{
        const empID =  req.params.id;
        const employee= await employeeModel.findOne({_id:empID})
       
        if(!employee){
         res.status(404).json({
                success:true,
                 message:"Employee not found"
            })
        }else{
        const emp= await employeeModel.updateOne({_id:empID},{$set:req.body})

        res.status(200).json({
                success:true,
                 message:"Employee updated success"
            })
        }
    }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
 }

 let employeeDelete = async (req,res)=>{
   try{
        const empID =  req.params.id;
        const emp= await employeeModel.deleteOne({_id:empID})
        res.status(200).json({
                success:true,
                 message:"Employee deleted success"
            })
        res.status(300).json({
            "name":shubham
        })
    }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
 }

 module.exports={employeeFetch,employeeCreate,employeeUpdate,employeeDelete}
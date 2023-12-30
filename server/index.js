const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const ProfileModel = require("./models/Profile")


const  app = express()
app.use(express.json())             //this will export all data that we are fatching in registration page to db
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Geeks-for-Geeks"); //connection is established with db

 // for registration
app.post('/regi',(req,res)=>{
        EmployeeModel.create(req.body) //data coming from frontend is in req.body
      .then(employee => res.json(employee))
      .catch(err => res.json(err))
});



//for login and check user if he already registerd or not if not registered then it will not login else login
app.post('/login',(req,res)=>{
  const{email,password} = req.body;
  EmployeeModel.findOne({email:email})
  .then(user =>{
    if(user){
      if(user.password === password){
        res.json("Success")
      }
      else{
        res.json("Wrong Password")
      }
    }
    else{ //if user is not registererd 
      res.json("Not Registered")
    }
  })
})

//for suggestion botx setting
app.post('/profile',(req,res)=>{
  ProfileModel.create(req.body) //data coming from frontend is in req.body
.then(profileDetails => res.json(profileDetails))
.catch(err => res.json(err))
});



app.listen(8000,()=>{
    console.log("server is running")
})

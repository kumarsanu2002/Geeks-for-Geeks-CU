
const mongoose = require('mongoose')

//it will give which table or box will contain which information
const EmployeeSchema = new  mongoose.Schema({
       name : String,
       email : {
        type : String,
        unique : true
       },
       password : String,
       confirmPassword : String
})


const  EmployeeModel =  mongoose.model("employee" ,EmployeeSchema);
module.exports = EmployeeModel

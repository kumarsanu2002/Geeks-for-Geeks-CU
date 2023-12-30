const mongoose = require('mongoose')

//it will give which table or box will contain which information
const ProfileSchema = new  mongoose.Schema({
       suggestion:{type:String, required:true}

})


const  ProfileModel =  mongoose.model("profileDetails" ,ProfileSchema);
module.exports = ProfileModel

const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true,

    },
    father_name:{
        type:String,
        required:true,
    },
    email:String,
    phone_number:{
        type:String,
        required:true
    },
    ID:{
        type:String,
        required:true
    }

})
const Student=mongoose.model('student',studentSchema)
module.exports.Student=Student
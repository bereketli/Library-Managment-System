const mongoose=require('mongoose')
const config=require('config')
const jwt=require('jsonwebtoken')

const adminstratorSchema=new mongoose.Schema({
    ID:{type:String,required:true},
    first_name:{type:String,required:true},
    father_name:{type:String,required:true},
    address:String,
    phone_number:String,
    email:String,
    pass_key:{type:String,
        minlength:6}

})
adminstratorSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({id:this.ID,name:this.first_name},config.get('jwtsecretkey'))
    return token

}
const Adminstrator=mongoose.model('adminstrator',adminstratorSchema)

exports.Adminstrator=Adminstrator
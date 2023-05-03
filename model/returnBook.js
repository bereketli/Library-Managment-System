const mongoose=require('mongoose')
const returnBookSchema=new mongoose.Schema({
    student_ID:{
        type:String,
        reqired:true
    },
    book_ID:{
        type:String,
        required:true
    },
    date:Date
})
const ReturnBook=mongoose.model('returnedBook',returnBookSchema)
module.exports.ReturnBook=ReturnBook
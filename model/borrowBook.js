const mongoose=require('mongoose')
const borrowBookSchema=new mongoose.Schema({
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
const BorrowBook=mongoose.model('borrowedBook',borrowBookSchema)
module.exports.BorrowBook=BorrowBook
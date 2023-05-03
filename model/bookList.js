const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    bookID:String,
        
    
    published_date:String,
   
    title:String,
               
    author:String,
    gener:String,
    stored:Number

})
const bookModel=mongoose.model("booklist",bookSchema)
module.exports.bookModel=bookModel
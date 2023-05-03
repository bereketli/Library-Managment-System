const bcrypt=require('bcrypt')
const {Liberarist}=require('../model/liberarist')
const {Adminstrator}=require('../model/adminstrator')
const {bookModel}=require('../model/bookList.js')
const {Student}=require('../model/student.js')
const {BorrowBook}=require('../model/borrowBook.js')
const {ReturnBook}=require('../model/returnBook.js')
const mongoose=require('mongoose')


async function liberaristlist(){
const list=await Liberarist.find({})
return list
}
async function booklist(search){
    const list=await bookModel.find({$or:[{title:search},{author:search}]}).lean()
     return list
}
async function registerBook(book){
    const bookStatus=new bookModel({
        bookID:book.bookID,
        published_date:book.published_date,
        title:book.title,
        author:book.author,
        gener:book.gener,
        stored:book.stored
        })
        bookStatus.save()
}
async function registerLiberarist(liberarist){
    
const liberarisStatus=new Liberarist({
    ID:liberarist.ID,
    first_name:liberarist.first_name,
    father_name:liberarist.father_name,
    address:liberarist.address,
    phone_number:liberarist.phone_number,
    email:liberarist.email,
    pass_key:await bcrypt.hash(liberarist.pass_key,10)

})
await liberarisStatus.save()
 return liberarisStatus
}


async function registerAdminstrator(admin){
    
    const adminstratorStatus=new Adminstrator({
        ID:admin.ID,
        first_name:admin.first_name,
        father_name:admin.father_name,
        address:admin.address,
        phone_number:admin.phone_number,
        email:admin.email,
        pass_key:await bcrypt.hash(admin.pass_key,10)
    
    })
    await adminstratorStatus.save()
     return adminstratorStatus
    }
async function registerStudent(student){
    const studentStatus=new Student({
        first_name:student.first_name,
        father_name:student.father_name,
        email:student.email,
        phone_number:student.phone_number,
        ID:student.ID

    })
    studentStatus.save()
}
async function registerBorrow(borrow){
    
    const resul =await bookModel.find({bookID:borrow.book_ID}).lean()
    if(resul[0].stored>3){
const borrowStatus=new BorrowBook({
    student_ID:borrow.student_ID,
    book_ID:borrow.book_ID,
    date:Date.now()
})
borrowStatus.save()

const result=await bookModel.update({bookID:borrow.book_ID},{$set:{stored:resul[0].stored-1}})
return "successfully borrowed"
    }
else
return "The number of books in the liberary is not enough to be borrowed"
   
}

async function registerReturn(returned){
    const returnStatus=new ReturnBook({
        student_ID:returned.student_ID,
        book_ID:returned.book_ID,
        date:Date.now()
    })
    returnStatus.save()
    const resul =await bookModel.find({bookID:returned.book_ID}).lean()
const result=await bookModel.update({bookID:returned.book_ID},{$set:{stored:resul[0].stored+1}})

    }
async function validator(userdata,user){
    if(user=="liberarist")
       var user=Liberarist
    
    else if (user=='adminstrator')
    user=Adminstrator


   const liber=await user.findOne({ID:userdata.ID})
    if(bcrypt.compare(userdata.pass_key,liber.pass_key))
    {
        return liber
    }
      
    }
module.exports.registerAdminstrator=registerAdminstrator
module.exports.validator=validator
module.exports.registerReturn=registerReturn
module.exports.registerBorrow=registerBorrow
module.exports.registerStudent=registerStudent
module.exports.registerLiberarist=registerLiberarist
module.exports.registerBook=registerBook
module.exports.booklist=booklist
module.exports.liberaristlist=liberaristlist
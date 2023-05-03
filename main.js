
const winston =require('winston')
require('winston-mongodb')
const config =require('config')
const cookieParser=require('cookie-parser')
const express=require('express')
const liberarist=require('./routes/liberarist.js')
const err=require('./middleware/err.js')
const home=require('./routes/home.js')
const adminstrator=require('./routes/adminstrator.js')
const mongoose=require('mongoose')
const {bookModel}=require('./model/bookList.js')
const app=express()
app.set('view engine','ejs')
app.use(cookieParser())
app.use(express.json());
app.use(express.static('public'))
mongoose.connect('mongodb://localhost/liberary_managment')
.then(()=>console.log("success fully conected to liberary_managment"))
.catch(()=>console.log("couldn't conncet to the databse"))

if(!config.get('jwtsecretkey')){
    console.error("fatal:error you need to have token secret key")
process.exit(1)
}
winston.add(new winston.transports.File({filename:'logfile.log'}))
winston.add(new winston.transports.MongoDB({
    db:'mongodb://localhost/liberary_managment',
    collection:'log',
    level:'info'
}))

app.use('/home',home)
 app.use('/liberarist',liberarist)

app.use('/adminPage',adminstrator)
app.use(err)

app.listen(3000,()=>{
    console.log("listening on port3000")
})

const trycatch=require('../middleware/trycatch')
const {authAdminstrator}=require('../middleware/auth.js')
const express=require('express')
const mongoose=require('mongoose')
const Adminstrator=require('../model/adminstrator')
const {registerBook}=require('../crudApis/crudapi.js')
const {registerLiberarist,registerStudent,registerAdminstrator}=require('../crudApis/crudapi.js')
const router=express.Router()
router.post('/addbook',trycatch(async(req,res)=>{
    registerBook(req.body)
}))
router.post('/addliberarist',authAdminstrator,trycatch(async(req,res)=>{
    res.send(await registerLiberarist(req.body))
}))
router.post('/addstudent',authAdminstrator,trycatch(async(req,res)=>{
    await registerStudent(req.body)
}))
router.post('/addadminstrator',authAdminstrator,trycatch(async(req,res)=>{
    await registerAdminstrator(req.body)
}))

router.get('/',authAdminstrator,(req,res)=>{
    res.render('adminPage')
})
router.get('/logout',authAdminstrator,trycatch((req,res)=>{
    res.clearCookie('cookies_adminstrator').render('indexhome')

}))
module.exports=router




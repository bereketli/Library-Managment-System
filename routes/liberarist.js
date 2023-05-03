const trycatch=require('../middleware/trycatch')
const {authLiberarist}=require('../middleware/auth.js')
const express=require('express')
const mongoose=require('mongoose')
const {registerBorrow,registerReturn}=require('../crudApis/crudapi.js')
const router=express.Router()

router.get('/',authLiberarist,(req,res)=>{
    res.render('liberarist')
})
router.post('/addborrowbook',authLiberarist,trycatch(async(req,res)=>{
res.send(await registerBorrow(req.body))
}))
router.post('/returnbook',authLiberarist,trycatch(async(req,res)=>{
   await registerReturn(req.body)
    }))
router.get('/logout',authLiberarist,trycatch((req,res)=>{
    res.clearCookie('cookies_liberarist').render('indexhome')

}))
module.exports=router
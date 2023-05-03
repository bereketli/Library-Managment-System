const trycatch=require('../middleware/trycatch.js')
const config=require('config')
const  jwt=require('jsonwebtoken')
const express=require('express')
const {booklist,liberaristlist,validator}=require('../crudApis/crudapi.js')
const router=express.Router()

router.get('/',(req,res)=>{

    res.render('indexhome')
  
});
router.get('/data',trycatch(async(req,res)=>{
   
    const lib=await booklist(req.query.search)
          
        res.send(lib)})
        
);
router.get('/login',(req,res)=>{
    res.render("login")
})
router.post('/idntifyuser',trycatch(async(req,res)=>{
   
    if(req.body.ID.substring(0,3)=='ATR'){
       
       const user=await validator(req.body,"liberarist") 
       if(user){
        const token=user.generateAuthToken()

        res.cookie("cookies_liberarist",token,{
            maxAge:1000*60*60*12,
            httpOnly:false}).send("liberarist")}
        else  res.send('User ID or Password invalid')         
      }
    else if((req.body.ID.substring(0,3)=='ADR')){
       
        const user=await validator(req.body,"adminstrator") 
        if(user){
            
         const token=user.generateAuthToken()
 
         res.cookie("cookies_adminstrator",token,{
             maxAge:1000*60*60*12,
             httpOnly:false}).send("adminstrator")}
         else  res.send('User ID or Password invalid')  
    
         }
}))

module.exports=router
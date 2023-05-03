const { Router } = require('express');
const connection = require('../../../middleware/connection');
const authentication = require('../../../middleware/authentication.js');


const router = Router();

router.get('/admin/club/approval' , authentication.isAdminLoggedIn  , (req , res) => {
    let sql = ` select * from clubs where status = "Not approved" `;
    connection.query(sql , (error , result)=>{  
         res.render('club/clubapproval' , { club : result}); 
    }); 
});

router.get('/admin/club/approval/:ClubName' , authentication.isAdminLoggedIn  , (req , res) => {
    let sql =  ` UPDATE clubs SET status="approved" WHERE ClubName = "${req.params.ClubName}" `;
    connection.query(sql , (error , result) => {  
        res.redirect('/admin/club/approval');
    });
    
});



module.exports = router;





const jwt = require("jsonwebtoken");
const config=require("config")

function authLiberarist(req, res, next) {
     
      if(!req.cookies.cookies_liberarist)
        {
            res.status(401).send("Access denid: there is no token")
        }
      else
        try {
           
          const token = req.cookies.cookies_liberarist;
          const decoded = jwt.verify(
            token,config.get("jwtsecretkey")
             );
          req.userData = decoded;
          next();
        } 
        catch (err) {
         console.log(err);
          res.send("you are not autorized to use this site")
        }
      }



module.exports = {
  authAdminstrator: (req, res, next) => {
    if(!req.cookies.cookies_adminstrator)
      {
          res.status(401).send("Access denid: there is no token")
      }
    else
      try {
         
        const token = req.cookies.cookies_adminstrator;
        const decoded = jwt.verify(
          token,config.get("jwtsecretkey")
           );
        req.userData = decoded;
        next();
      } 
      catch (err) {
       console.log(err);
        res.send("you are not autorized to use this site")
      }
    }
}
module.exports.authLiberarist=authLiberarist
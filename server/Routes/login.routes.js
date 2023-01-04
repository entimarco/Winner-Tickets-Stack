const express = require( "express");
const router = express.Router();
const mongoose = require( "mongoose");
const schema = mongoose.Schema;
const jwt = ("  ");


const userschema = new schema({

    email: String,
    pass:String,
    firstname: String,
    lastname: String,
    
    
})



const JWT_TOKEN = "das7uugeb1y2o23712u4uwPSDU*@!U";

const loginmodel = mongoose.model('users',userschema)
module.exports = router

router.post('/RegistreUser', (req, res)=>{

    
    const newUser = new loginmodel({
        email:  req.body.REmail,
        pass: req.body.pass,
        firstname: req.body.Rfirstname,
        lastname: req.body.RLastname,
        
    })
     
    console.log(newUser) 

    newUser.save(function(err){
        if(!err){
            res.send('User Registered')
        }else{
            res.send(err)
        }
    })

})

router.post('/Login-User', (req, res)=>{

    
    const {Uemail, Upass} = req.body
    console.log(Uemail)

    const user = loginmodel.findOne({email:Uemail},function(err,docs){
        
        if (err){
            res.send(err)
            res.send('Invalid Password')
        }else{
            console.log(docs)
            if(!docs){
                res.send('No Registre')
            }else{
                res.send(docs)
            }
            
        }
    });
    

})
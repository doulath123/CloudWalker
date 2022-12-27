const express=require('express');
const jwt=require('jsonwebtoken')
const bcrypt=require("bcrypt")
const router=express.Router();
const Authenticate=require("../middleware/authenticate")
require("../db/conn")
const User=require('../model/userSchema')

router.post("/register", async (req,res)=>{
    const {name,email, phone, work, password, cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"plz"});
    }
    try{
      const userExist= await  User.findOne({email:email})
      if(userExist){
        return res.status(422).json({err:'email already exist'})
    }
    else if(password!==cpassword)
    {
        return res.status(422).json({err:"password not matching"})
    }else{
        const user=new User({name, email, phone, work, password, cpassword})
        //hash pass
    
        await user.save();
        
            res.status(201).json({message:"user registered auccessfully"})
    }

    
    // else{
    //     res.status(500).json({error:"faid to registered"})
    // }
    //   .then((userExist)=>{
    //         if(userExist){
    //             return res.status(422).json({err:'email already exist'})
    //         }
    //         const user=new User({name, email, phone, work, password, cpassword})
    //         user.save().then(()=>{
    //             res.status(201).json({message:"user registered auccessfully"})
    //         }).catch((err)=>res.status(500).json({error:"faid to registered"}))
    //     })

    }catch(err){
        console.log(err)

    }
    

    // console.log(name);
    // // res.json({message:req.body})
    // // res.send("mera")

});

// Login route

router.post('/signin', async(req,res)=>{
    // // console.log(req.body);
    // res.json(req.body)
try{
    let token;
const {email, password}=req.body;
if(!email || !password){
    return res.status(400).json({err:"plz filled the data"})
}
const userLogin= await User.findOne({email:email});
// console.log(userLogin);
if(userLogin){
    const isMatch=await bcrypt.compare(password, userLogin.password);

    if(!isMatch){
        res.status(400).json({err:"Invalid Credientials pass"})
    }else{
        token= await userLogin.generateAuthToken();
        console.log(token);
    res.cookie("jwtoken", token, {
        expires:new Date(Date.now()+25892000000),
        httpOnly:true
    });
        res.json({message:"user signin succesfully"});
    }
    
}else{
    res.status(400).json({err:"Invalid Credientials email"})
}
}catch(err){
    console.log(err);
}
});

//about us ka page
router.get('/about', Authenticate, (req, res)=>{
    console.log("hello my about")
    res.send(req.rootUser)
    });



module.exports =router;
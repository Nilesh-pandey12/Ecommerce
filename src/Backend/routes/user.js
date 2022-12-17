const express=require('express');

const router=express.Router();
const User= require('../models/User')

const {body,validationResult}=require('express-validator')

router.post('/',[
    body('userName').isEmail(),
    body('password').isLength({min:5})
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        userName: req.body.userName,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=>{console.log(err)
      res.json({error:"please enter a unique usrname" ,message:err.message})})
    }
);

module.exports=router
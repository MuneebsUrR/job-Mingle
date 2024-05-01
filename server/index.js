const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const { DBRef } = require('mongodb');
const db = "mongodb+srv://muneebsurrehman:w2RtxV250m9oRMl7@cluster0.9cm4itv.mongodb.net/jobemingle";
let PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//connect to mongodb atlas database
mongoose.connect(db).then(()=>{} ).catch((err)=>{});


app.post('/api/register',async(req,res)=>{
   

    try {
        const CheckExistingUser =await User.findOne({email:req.body.email , contact:req.body.contact})
        if(CheckExistingUser){return res.status(400).json( {error:"user with this email already exist"}) }
        await User.create(
            {
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                contact:req.body.contact,
                email:req.body.email,
                password:req.body.password,

            }

        )
        res.json({status:"ok"})
    } catch (error) {
        res.status(500).send('Internal server error')
    }

})

app.post('/api/login',async(req,res)=>{
   
    try {
        const user =await User.findOne({
            email : req.body.email,
            password: req.body.password,
        })

        if(!user){
           return res.status(404).json('User not found')
        }else if (user){
            return res.json({status:'ok'})
        }

    } catch (error) {
        res.status(500).send('Internal Server error')
    }
})

app.listen(PORT,()=>{
   
})
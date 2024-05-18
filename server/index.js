
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const { DBRef } = require('mongodb');


const cors = require('cors');
app.use(cors());


app.use(express.json());

const db = "mongodb+srv://muneebsurrehman:w2RtxV250m9oRMl7@cluster0.9cm4itv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/jobemingle";

let PORT = 5000;
//connect to mongodb atlas database
mongoose.connect(db).then(()=>{console.log("Connection established")} ).catch((err)=>{console.log(err)});

app.get('/', async(req, res) => {
    const result = await User.find();
    res.send(result);
});


app.post('/register',async(req,res)=>{
   
    console.log(req.body)
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
       
        res.json({ status: "ok" })
       
        
    } catch (error) {
        res.status(500).send('Internal server error')
    }

})

app.post('/login',async(req,res)=>{
    console.log(req.body)
    try {
        const user =await User.findOne({
            email : req.body.email,
            password: req.body.password,
        })

        if(!user){
           return res.status(404).json('User not found')
        } else if (user) {
           
            return res.json({status:'ok'})
        }

    } catch (error) {
        res.status(500).send('Internal Server error')
    }
})

app.listen(PORT,()=>{
   console.log("Server is running on port 5000")
})
const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    firstname:{
        type:String,
        required:[true,"Please enter your name"]
    },
    lastname:{
        type:String,
        required:[true,"Please enter your name"]
    },
    contact:{
        type:Number,
        unique : true,
        required:true,
    },
    email:{
        type:String,
        required: [true,"Please enter your email"],
        unique:true
    },
    password:{
        type: String,
        required:[true,"Please enter your password"]
    }
})

const User = mongoose.model("user",UserSchema);
module.exports=  User ;
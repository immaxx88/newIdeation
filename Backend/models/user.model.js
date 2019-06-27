const mongoose = require('mongoose')
const passport = require('passport')

var userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : "Name can't be empty"
    },
    email : {
        type : String,
        required : "Email can't be empty",
        unique : true
    },
    password : {
        type : String,
        required : "Password can't be empty",
        minlength : [4,"Password must be atleast 4 letters long"]
    },
    role : {
        type : String
    }
})

userSchema.path('email').validate((val) =>
{
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(val);
},"Invalid Email");


userSchema.methods.verifyPassword = function (password)
{
    if(password == this.password)
        return true
    else 
        return false 
}

mongoose.model("User",userSchema)
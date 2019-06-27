const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = mongoose.model('User')
const Post = mongoose.model('Post')
const passport = require('passport')
const loadash = require('lodash')

router.post('/register',(req,res,next)=>
{
var user = new User()
user.name = req.body.name;
user.email = req.body.email;
user.password = req.body.password;
user.role = req.body.role;
user.save((err,doc)=> 
{
    if(!err)
        res.send(doc)
    else{
        if(err.code == 11000)
            res.status(422).send(['Duplicate email addrress found'])
        else
            return next(err)
    }
})
})

router.post('/addpost',(req,res,next) =>
{
var post = new Post()
post.name = req.body.name;
post.topicname = req.body.topicname;
post.description = req.body.description;
post.save((err,doc)=>
{
    if(!err)
        res.send(doc)
    else {
        return next(err)
    }
})
})

router.post('/authenticate',(req,res) =>
{
passport.authenticate('local',(err,user,info) =>
{
if(err) 
    return res.status(400).json(err);
else if (user) 
    return res.status(200).json(user);
else 
 return res.status(404).json(info)
} 
)(req,res)
})



router.post('/userprofile',(req,res) => 
{
User.findOne({ _id : req.body._id },
(err, user) =>{
    if(!user)
        return res.status(404).json({status : false, message: 'User Record not found'});
    else 
        return res.status(200).json({status: true, user : loadash.pick(user,['name','email','role'])})
}
)
})


router.get('/allposts',(req,res) =>
{
        Post.find({}, function(err, users) {
          var userMap = {};
         // var i = 1
          users.forEach(function(user) {
            //userMap[i] = user;
            userMap = users
            //i++;
          });
          res.send(userMap);  
        });
      });

module.exports = router
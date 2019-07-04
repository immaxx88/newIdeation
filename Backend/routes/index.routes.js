const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = mongoose.model('User')
const Post = mongoose.model('Post')
const Image = mongoose.model('Image')


const passport = require('passport')
const loadash = require('lodash')
const fs = require('fs')
// const multer = require('multer');
//import fs from 'fs';
//import fs from 'fs';


router.post('/upload', (req,res) =>
{
    var image = new Image()
    image.base64String = req.body.base64String;
    image.author = req.body.author;
    image.postid = req.body.postid;
    image.filename = req.body.filename;

    let base64Str = req.body.base64String; // Not a real image
    let fileName = req.body.filename;
    let base64Image = base64Str.split(';base64,').pop();
    //let imgPath = `/Backend/uploads/${fileName}`
    fs.writeFile(`./uploads/${fileName}`, base64Image, {encoding: 'base64'}, function(err) {
    console.log('File created');
});
    image.save((err,doc) =>
    {
        if(!err)
            res.send(doc)
        else
            console.log(err)
    })

    console.log(saveImage(req.body.base64String))
})


  
  
  /*Download the base64 image in the server and returns the filename and path of image.*/
  


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

router.get('/getphotos',(req,res) =>
{
    Image.find({}, function(err, users) {
        var userMap = {};
       // var i = 1
        users.forEach(function(user) {
          //userMap[i] = user;
          userMap = users
          //i++;
        });
        res.send(userMap);  
      });
}
)

router.put('/addpost',(req,res,next) => 
{
    Post.findOneAndUpdate(
        {"_id" : req.body._id},
        {$push : {comments : req.body.comments + " Commented by " + req.body.author}},
        {new : true},
        function (err, documents) {
            res.send({ error: err, affected: documents }); 
        }
    )
})

router.post('/addpost',(req,res,next) =>
{
  //  let i = 0;
var post = new Post()
post.name = req.body.name;
post.topicname = req.body.topicname;
post.description = req.body.description;
//post.comments[i] = req.body.comments;
//i++;
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

  //post request for  
//   app.post('/api/photo',function(req,res){
//     var newItem = new Image();
//     newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newItem.img.contentType = 'image/png';
//     newItem.save();
//    });   

module.exports = router
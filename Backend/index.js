require('./config/config');
require('./models/db');
require('./config/passportConfig')
const rtIndex = require('./routes/index.routes')

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
//

//Upload Code
const multer = require('multer');
// cosnt multerConf = {
//     storage : multer.diskStorage(
//         {
//             destination : function(req,file,next)
//             {
//                 next(null,'./uploads')
//             },
//             filename : function(req,file,next)
//             {
//             console.log(file);
//             }
//         })
// }

//



  


//
var app = express()

app.use(bodyParser.json())  
app.use(cors())
app.use(passport.initialize())
app.use('/api',rtIndex)


app.use((err,req,res,next) =>  {
    if(err.name === 'ValidationError')
    {
        var valErrors =[];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message))
        res.status(422).send(valErrors)
    }
})
// Code for uploading image
// app.use(
//     multer(
//     { dest: './uploads/',
//     rename: function (fieldname, filename) 
//     {
//       return filename;
//     },
//    }
//    ));

app.listen(process.env.PORT,(res)=> {
    console.log(`Express Server Running on port ${process.env.PORT}`)
})
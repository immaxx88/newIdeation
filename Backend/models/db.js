const mongoose = require('mongoose')
const passport = require('passport')

mongoose.connect(process.env.MONGODB_URI,(err) => 
{
    if(!err) 
    {
        console.log('DB Connected Successfully');
    }
    else
    {
        console.log("Error Encountered" + JSON.stringify(err,undefined,2));
    }
})

require('./user.model')
require('./post.model')
require('./image.model')
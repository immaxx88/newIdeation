const mongoose = require('mongoose')

var imgSchema = new mongoose.Schema(
    { 
        base64String: 
        { 
            type : String
        },
        author:
        {
            type : String
        },
        postid : 
        {
            type : String
        }
    }
)

mongoose.model('Image',imgSchema)
const mongoose = require('mongoose')

var postsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : "Name can't be empty"
    },
    topicname : {
        type : String,
        required : "Topic Name can't be empty"
    },
    description : {
        type : String,
        required : "Discussion can't be empty"
    }
})


mongoose.model("Post",postsSchema)
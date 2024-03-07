const {Schema, model} = require("mongoose")

const postSchema = new Schema({
    title:{
        type: String
    },
    author: {
        type: String
    },
    content:{
        type : String
    }
})

const Post=new model('Post',postSchema);

module.exports=Post;
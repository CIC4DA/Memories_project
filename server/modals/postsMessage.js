import mongoose from "mongoose";

// schema --> in this we are going specify each post is going to have these things
const postSchema = mongoose.Schema({
    title : String,
    message: String,
    creator : String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type : Number,
        default : 0,
    },
    createdAt : {
        type : Date,
        default: new Date(),
    },
});


const PostMessage = mongoose.modelNames('PostMessage',postSchema);

export default PostMessage;
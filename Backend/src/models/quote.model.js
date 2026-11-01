// modelling posts here

const mongoose = require("mongoose");
const postScheme = new mongoose.Schema({
    imgURL : {
        type : String,
        required : true
    },

    caption : {
       type : String,
       required : true,
       maxlength : 1000,
       trim: true
    },

    genre : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Genre"
    },

    owner : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true
    }

},
{
    timestamps : true
})

const postModel = mongoose.model("Post" , postScheme)

module.exports = postModel;
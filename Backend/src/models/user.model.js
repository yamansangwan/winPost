// modelling ids here

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            trim: true,
            maxlength: 15,
            // timestamps : true (should be indi)
        },

        email : {
            type : String,
            required : true,
            trim : true,
            lowercase : true
        }
    },
    {
        timestamps : true
    }

)

const userModel = mongoose.model("User" , userSchema)

module.exports = userModel;
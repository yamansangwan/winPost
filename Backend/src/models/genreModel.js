const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    dscry : {
        type : String,
        trim : true,
    }, 
    
}, {
        timestamps : true
    })

const genreModel = mongoose.model("Genre",genreSchema);

module.exports = genreModel;
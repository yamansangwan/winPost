const express = require('express');
const app = express();
app.use(express.json());

let quotes = [];

app.get("/get-quotes",(req,res) => {
   
    res.status(200);
    res.json(quotes);

})

app.post("/create-quotes",(req , res)=>{
    quotes.push(req.body);
    res.status(201).json("Created")
})

module.exports = app;
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

app.get("/get-quote/:id",(req,res) => {
      const id = Number(req.params.id);
      if(!Number.isInteger(id) || id < 1){
        return res.status(400).json("Enter A Valid ID");
      }

    //   const quote = quotes.filter(q => q.id === id);

      const quote = quotes.find( q => q.id === id );
      res.status(200).json(quote);
})

app.put("/update-quote/:id", (req, res) => {
     const id = Number(req.params.id);
     if(!Number.isInteger(id) || id < 1){
        return res.status(400).json("Enter A Valid ID");
      }
      
     const quote = quotes.find( q => q.id === id );
     quote.id = req.body.id;
     quote.text = req.body.text;
     quote.author = req.body.author;
     


     res.status(200).json("updated");

})

app.patch("/update-quote/:id",(req,res)=>{
    const id = Number(req.params.id);
     if(!Number.isInteger(id) || id < 1){
        return res.status(400).json("Enter A Valid ID");
      }
      
     const quote = quotes.find( q => q.id === id );

     if(req.body.id != undefined){
     quote.id = req.body.id;
     return
     }

     // undefined check pending !?
     quote.text = req.body.text;
     quote.author = req.body.author;    

     res.status(200).json("updated");
})

app.delete("/quotes/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            message: "Enter a valid ID"
        });
    }

    const quote = quotes.find(q => q.id === id);

    if (!quote) {
        return res.status(404).json({
            message: "Quote not found"
        });
    }

    quotes = quotes.filter(q => q.id !== id);
    res.status(200).json({
        message: "Quote deleted successfully",
        data: quote
    });
});


module.exports = app;
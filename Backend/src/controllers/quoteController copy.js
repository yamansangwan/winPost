// request handling here

let quotes = [];

const getQuotes = (req,res) => {
   
    res.status(200);
    res.json(quotes);

}

const createQuote = (req , res)=>{
    const { text , author } = req.body;
    if (typeof text !== "string" || text.trim() === ""){
       return res.status(400).json("Enter valid text");
    }
    if (typeof author !== "string" || author.trim() === ""){
        return res.status(400).json("Enter valid author");
    }

    const ids = quotes.map(q => q.id);
    const Lid = ids.length > 0 ? Math.max(...ids) : 0;
    const newBody = {
        ...req.body,
        id : Lid + 1
    }

    quotes.push(newBody);
    res.status(201).json({
        msg : "larp quote is created",
    "new larp" : newBody})
}

const getQuoteByID = (req,res) => {
      const id = Number(req.params.id);
      if(!Number.isInteger(id) || id < 1){
        return res.status(400).json("Enter A Valid ID");
      }
      
    //   const quote = quotes.filter(q => q.id === id);

      const quote = quotes.find( q => q.id === id );

      if (!quote){
        return res.status(404).json("ID not Found")
      }
      else {
        res.status(200).json(quote);
      }
      
}

const updateQuote = (req, res) => {
     const id = Number(req.params.id);
     const { text , author } = req.body;

     if (typeof text !== "string" || text.trim() === ""){
        return res.status(400).json("Enter valid text");
    }


    if (typeof author !== "string" || author.trim() === ""){
        return res.status(400).json("Enter valid author");
    }

     if(!Number.isInteger(id) || id < 1){
        return res.status(400).json("Enter A Valid ID");
      }
      
     const quote = quotes.find( q => q.id === id );
     
      if (!quote){
        return res.status(404).json("ID not Found")
      }
      else {
        // quote.id = req.body.id;
        quote.text = req.body.text;
        quote.author = req.body.author;
     return res.status(200).json({
    message: "Quote updated",
    "quote": quote
});
      }
      

     

}

// to be configured again ~~!
const patchQuote = (req, res) => {
    const id = Number(req.params.id);
    const { text, author } = req.body;

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json("Enter a valid ID");
    }

    const quote = quotes.find(q => q.id === id);

    if (!quote) {
        return res.status(404).json("Quote not found");
    }

    if (req.body.text !== undefined &&
        (typeof text !== "string" || text.trim() === "")) {
        return res.status(400).json("Enter valid text");
    }

    if (req.body.author !== undefined &&
        (typeof author !== "string" || author.trim() === "")) {
        return res.status(400).json("Enter valid author");
    }

    if (req.body.text !== undefined) {
        quote.text = text;
    }

    if (req.body.author !== undefined) {
        quote.author = author;
    }

    return res.status(200).json({
        message: "Quote updated",
        "quote": quote
    });
};


// here filter can be replaced in future for memory saving by splice...!!! later on
const deleteQuote = (req, res) => {
    const id = Number(req.params.id);

    const quote = quotes.find(q => q.id === id);

    if (!Number.isInteger(id) || id < 1){
          return res.status(400).json("Invalid ID entered")
      }
    else if (!quote){
        return res.status(404).json("ID not Found")
      }
    else {
        quotes = quotes.filter(q => q.id !== id);
        res.status(200).json({
        message: "Quote deleted successfully",
        data: quote
    });
      }

    
};

module.exports = {getQuotes,getQuoteByID,createQuote,updateQuote,patchQuote,deleteQuote};
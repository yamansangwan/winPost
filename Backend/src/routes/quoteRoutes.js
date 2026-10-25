//  defining the endpoints here  
const express = require("express");
const router = express.Router();
const {getQuotes,getQuoteByID,deleteQuote,patchQuote,updateQuote,createQuote} = require("../controllers/quoteController");

router.get("/get-quotes",getQuotes)
router.get("/get-quote/:id",getQuoteByID)
router.post("/create-quote",createQuote)
router.put("/update-quote/:id",updateQuote)
router.patch("/patch-quote/:id",patchQuote)
router.delete("/delete-quote/:id",deleteQuote)


module.exports = router;
const express = require('express');
const app = express();
const routes = require("./routes/quoteRoutes");
app.use(express.json());
app.use("/api",routes)

// api routes are moved in controller

module.exports = app;
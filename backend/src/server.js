const express = require('express');
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lciziks:Lucas2002@codetools-kfiwf.mongodb.net/CodeTools?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false})

const server = express();


server.use(express.json())
server.use(routes);

server.listen(3333)

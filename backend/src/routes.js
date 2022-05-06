const express = require('express');
const UserController = require("./controllers/UserController")

const routes = express.Router();

// routes.get('/', (req,res) => {
//     return res.json({message: `Hello ${req.query.name}!`})
// })

routes.post("/cadastro", UserController.store)

module.exports = routes
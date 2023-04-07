const express =require("express")
const route =express.Router();
const controller = require("../controller/usercontroller");


route.post("/register",controller.register);
route.post("/login",controller.login);

module.exports =route;
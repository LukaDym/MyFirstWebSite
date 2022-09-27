"use strict"

const { response } = require("express");
const express = require("express");
const router = express.Router()

const path = "/"

const controller = (request,response) => {
    response.render("about" , {
    })
};

router.get(path,controller)


// Module export

module.exports = router
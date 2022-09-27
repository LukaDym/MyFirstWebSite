"use strict"

const { response } = require("express");
const express = require("express");
const router = express.Router()

const path = "/contact"

const controller = (request,response) => {
    response.render("contact" , {
    })
};

router.get(path,controller)


// Module export

module.exports = router
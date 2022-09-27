"use strict"

const { response } = require("express");
const express = require("express");
const router = express.Router()

const path = "/"

const controller = (request,response) => {
    let var_username = "Bobby"
    response.render("homepage" , {
        username: var_username
    })
};

router.get(path,controller)


// Module export

module.exports = router
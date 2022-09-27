"use strict"

const ejs = require("ejs")
const path = require("path");
const express = require("express");

const app = express();

const guessPort = require("./utils/port")
// const port = guessPort()
const port = 3000;


// App Settings
// ---


// App Setup
// ---
// Definition du moteur de rendu,
// On precise à Express que le moteur de rendu des vues se fera avec le module "ejs"
// Le module "ejs",transmet à Express ses paramètres avec la propriete 
app.engine('.html', ejs.__express);

// Définition du répertoire de sotckage des fichier de vues
// path.join() va resoudre automatiquement le chemin absolut du repertoire "views"

app.set('views',path.join(__dirname, "views"));
app.set('view engine',"html");



// Routing
// --
app.use("/",require("./controllers/homepage"))
app.use("/",require("./controllers/contact"))
app.use("/about",require("./controllers/about"))



// Start server App
// --

app.listen(port, () => {
    console.log("App listening on port:",port);
})
'use strict';
const express = require("express");
const path = require("path");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 4000;


app.use(express.static(path.resolve(__dirname, "public")));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/main.ejs");

app.get('/', (request, response) => {
    response.render('index');
});
app.get('/creation', (request, response) => {
    response.render('creation');
});
app.get('/defaut', (request, response) => {
    response.render('defaut');
});
app.get('/personnages', (request, response) => {
    response.render('personnages');
});


app.listen(port, () => {
    console.log(`Le serveur tourne au http://localhost:${port} `);
});
require('./model/db');  

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

var app = express();    
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())
app.set("views",path.join(__dirname,"/views/"));
app.engine('hbs', exphbs({ extname : 'hbs', defaultLayout : 'mainLayout', layoutsDir : __dirname + '/views/layouts' , handlebars : allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine','hbs');

var empplyeeController = require("./controller/employeeController")

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server has started successfully on port 3000");
})

app.use("/employee",empplyeeController)
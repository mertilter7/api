const express = require("express");
const cors = require("cors");
const { router } = require("./routers");
const fileUpload = require('express-fileupload')
const _ = require('lodash'); 
const handlebars = require('express-handlebars');

const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars' , handlebars({
    layoutsDir: `$(__dirname)/views/layouts`
}));

app.use(express.static('views'));

app.use(fileUpload());



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.get('/' , ( req , res ) => {
    res.send('main', {layout: 'index'});
})

app.listen(3000);


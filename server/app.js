const express = require("express");
const cors = require("cors");
const { router } = require("./routers");
const fileUpload = require('express-fileupload')
const _ = require('lodash'); 


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(fileUpload());

app.use("/", router);



app.listen(3000);


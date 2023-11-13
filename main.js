const express = require('express');
const app = express();
const bodyParser =require("body-parser");
var cors = require('cors');
app.use(cors());

var authRouter = require('./API/auth');
var register = require('./API/register');
var service =require('./API/service');
var user =require('./API/user');
var flag =require('./API/flag');
app.use(bodyParser.urlencoded({extended : true}));


app.listen(8080,function(){
    console.log('Hello Teahyeon');
});//서버 오픈

app.use('/', authRouter);
app.use('/', register);
app.use('/', service);
app.use('/', user);
app.use('/', flag);

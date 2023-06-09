const express = require('express');
const app = express();
const bodyParser =require("body-parser");

var authRouter = require('./lib_login/auth');
var register = require('./lib_login/register');
var service =require('./lib_service/service');
var user =require('./lib_user/user');
app.use(bodyParser.urlencoded({extended : true}));


app.listen(8080,function(){
    console.log('Hello Teahyeon');
});//서버 오픈

app.use('/', authRouter);
app.use('/', register);
app.use('/', service);
app.use('/', user);
const express = require('express');
const app = express();
const bodyParser =require("body-parser");
app.set('veiw engine','ejs');

var authRouter = require('./lib_login/auth');
var register = require('./lib_login/register');

app.use(bodyParser.urlencoded({extended : true}));


app.listen(8080,function(){
    console.log('Hello Teahyeon');
});//서버 오픈


app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
});


app.use('/', authRouter);
app.use('/', register);

const express = require('express');
const app = express();
const bodyParser =require("body-parser");
const path = require('path');  // path 모듈 사용


var authRouter = require('./API/auth');
var register = require('./API/register');
var service =require('./API/service');
var user =require('./API/user');
app.use(bodyParser.urlencoded({extended : true}));


app.listen(8081,function(){
    console.log('Hello');

});//서버 오픈

/*
app.use( '/', express.static( path.join(__dirname, '../front-end-main/dist') ));  
// 이 부분이 없으면 아래코드에서 index.html을 로드하지 못한다.
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../front-end-main/dist/index.html'));  
})
*/


app.use('/', authRouter);
app.use('/', register);
app.use('/', service);
app.use('/', user);
const express = require('express');
const router = express.Router();
const bodyParser =require("body-parser");

 db =require("../db.js");

 router.get('/register',function(req,res){
    res.sendFile(__dirname+'/register.html');
 });

 router.post('/register',function(req,res){
    var username = req.body.username;
    var password = req.body.pwd;
    var password2 = req.body.pwd2;

    if (username && password && password2) {
        
        db.query('SELECT * FROM usertable WHERE username = ?', [username], function(error, results, fields) { 
            if (error) throw error;
            if (results.length <= 0 && password == password2) {     
                db.query('INSERT INTO usertable (username, password) VALUES(?,?)', [username, password], function (error, data) {
                    if (error) throw error2;
                    res.send(`<script type="text/javascript">alert("회원가입이 완료되었습니다!");
                    document.location.href="/";</script>`);
                });
            } else if (password != password2) {                     
                res.send(`<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다."); 
                document.location.href="/register";</script>`);    
            }
            else {                                                 
                res.send(`<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); 
                document.location.href="/register";</script>`);    
            }            
        });

    } else {        
        res.send(`<script type="text/javascript">alert("입력되지 않은 정보가 있습니다."); 
        document.location.href="/register";</script>`);
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const bodyParser =require("body-parser");
var cors = require('cors');
router.use(cors());

 db =require("../db.js");

 router.post('/register',function(req,res){
    var username = req.body.username;
    var password = req.body.pwd;

    if (username && password) {
        
        db.query('SELECT * FROM usertable WHERE username = ?', [username], function(error, results, fields) { 
            if (error) throw error;
            if (results.length <= 0 && password) {     
                db.query('INSERT INTO usertable (username, password) VALUES(?,?)', [username, password], function (error, data) {
                    if (error) throw error2;
                    res.send({success :true });
                });
            } 
            else {                                                 
                res.send({success: false , message : "이미 존재하는 아이디입니다."});    
            }            
        });

    } else {        
        res.send({success : false });
    }
});

module.exports = router;
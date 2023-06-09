const express = require('express');
const router = express.Router();
const bodyParser =require("body-parser");
var cors = require('cors');
router.use(cors());

const db =require('../db.js');
router.use(bodyParser.urlencoded({extended : true}));



 router.get('/user',function(req,res){
    username = req.body.username;
    db.query('SELECT os,cpu,ram,gpu,gpuCompany,volume,volumeCount FROM servicetable WHERE username = ?',[username], function(err,results,fields){
        if(results.length>0){

            res.send(results[0]);
    
        }
        else{
            res.send({success : false , message: '구독한 서비스가 없습니다'});
        }

    })
 })


module.exports = router;
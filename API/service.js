const express = require('express');
const router = express.Router();
const bodyParser =require("body-parser");
var cors = require('cors');
router.use(cors());

const db =require('../db.js');
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json()); 


router.post('/service',function(req,res){
    var username = req.body.username;
    var os =req.body.os;
    var cpu = req.body.cpu;
    var ram  = req.body.ram;
    var gpu = req.body.gpu;
    var gpuCompany = req.body.gpuCompany;
    var volume = req.body.volume;
    var volumeCount =req.body.volumeCount;
    var serviceNum = req.body.serviceNum;

    db.query('SELECT * FROM servicetable WHERE username = ?',[username], function(err,results,fields){
        if(err) throw error;
        console.log(results);
        if(results.length>0){
            res.send({success:false, message : '이미 서비스가 존재합니다'});
        }
        else{
            db.query('INSERT INTO servicetable (username, os, gpu , cpu,gpuCompany,ram,volume, volumeCount, serviceNum) VALUES(?,?,?,?,?,?,?,?,?)',
            [username,os,gpu,cpu,gpuCompany,ram ,volume,volumeCount,serviceNum] ,function(err,data){
                res.send({success : true});
            })
        }
    })


})

module.exports = router;
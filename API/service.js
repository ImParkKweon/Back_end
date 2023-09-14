const express = require('express');
const router = express.Router();
const bodyParser =require("body-parser");
var cors = require('cors');
router.use(cors());

const db =require('../db.js');
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json()); 

// shell 명령어 실행 module
const shell = require('shelljs')

// python file을 실행하여 컨테이너 생성 요청
async function createContainerScript(info) {
    shell.cd('~');

    // 실행할 shell 명령어
    let script = `
        python3 script.py ${info.usrename} ${info.os} ${info.cpu} ${info.ram} ${info.volume} ${info.volumeCount}
    `

    if(shell.exec(script).code !== 0) {
        console.log("fail");
        shell.exit(1);
    }
}

router.post('/service',function(req,res){
    let username = req.body.username;
    let os =req.body.os;
    let cpu = req.body.cpu;
    let ram  = req.body.ram;
    let gpu = req.body.gpu;
    let gpuCompany = req.body.gpuCompany;
    let volume = req.body.volume;
    let volumeCount =req.body.volumeCount;
    let serviceNum = req.body.serviceNum;

    // 생성할 컨테이너 정보
    let createContainerInfo = {
        username, os, cpu, ram, volume, volumeCount
    }

    createContainerScript(createContainerInfo);

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
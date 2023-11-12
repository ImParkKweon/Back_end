const express = require('express');
const router = express.Router();
const bodyParser =require("body-parser");
var cors = require('cors');
router.use(cors());

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json()); 

let flag = true

router.post('/flag',function(req,res){

    if (req.body.setFlag == 1) { 
        flag = true
    }else { 
        flag = false
    }
    
    res.send({
        flag: flag,
        result: true,
    })
})

router.get('/flag', function(req, res) { 
    res.send({
        flag: flag
    })
})






module.exports = router;
const express = require('express');
const router = express.Router();
const bodyParser =require("body-parser");
var cors = require('cors');
router.use(cors());

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json()); 

router.post('/flag',function(req,res){

    var setFlag = req.body.setFlag;

    if(setFlag==true)
    {
        res.send({flag:1});
    }
    else if(setFlag ==false)
    {
        res.send({flag:0});
    }
})


module.exports = router;
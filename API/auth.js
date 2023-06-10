const express = require('express');
const router = express.Router();
const bodyParser =require("body-parser");
var cors = require('cors');
router.use(cors());

 db =require("../db.js");
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json()); 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session=require('express-session');
router.use(session({secret:"secret",resave :true,saveUninitialized:false}));
router.use(passport.initialize());
router.use(passport.session());


router.post('/login', function(req, res, next) {
  const { id, pw } = req.body;
  
  if (!id || !pw) {
    console.log('false');
    return res.send({ success: false });
  }
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      console.error(err);
      return res.send({ success: false });
    }
    if (!user) {
      console.log('false');
      return res.send({ success: false });
    }
    req.logIn(user, function(err) {
      if (err) {
        console.error(err);
        return res.send({ success: false });
      }
      console.log('true');
      return res.send({ success: true });
    });
  })(req, res, next);
});


passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    session: true,
    passReqToCallback: false,
  }, function (username, password, done) {
    //console.log(입력한아이디, 입력한비번);
    db.query('SELECT * FROM usertable WHERE username = ? AND password = ?', [username, password], function (err, result) {
        if(err) console.log('mysql 에러');  

        if(result.length === 0){
          console.log("결과 없음");
          return done(null, false, { message: 'Incorrect' });
        }else{
          var json = JSON.stringify(result[0]);
          var userinfo = JSON.parse(json);
          console.log("userinfo " + userinfo);
          return done(null, userinfo,{ message: 'Incorrect' });
        }
    })
  }));

  passport.serializeUser(function(user,done){
    done(null,user.id)
  });
  passport.deserializeUser(function(id,done){
    done(null,{})
  });

  module.exports = router;
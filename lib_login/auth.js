const express = require('express');
const router = express.Router();
const bodyParser =require("body-parser");

 db =require("../db.js");

router.use(bodyParser.urlencoded({extended : true}));
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session=require('express-session');
router.use(session({secret:"secret",resave :true,saveUninitialized:false}));
router.use(passport.initialize());
router.use(passport.session());



router.get('/login',function(req,res){
  res.render('login.ejs');
});
router.get('/fail',function(req,res){
    res.send(`<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); 
                document.location.href="/login";</script>`); 
    
})

router.post('/login',passport.authenticate('local',{
    failureRedirect : '/fail'
}),function(req,res){
    res.redirect('/');
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
          console.log(result);
          var json = JSON.stringify(result[0]);
          var userinfo = JSON.parse(json);
          console.log("userinfo " + userinfo);
          return done(null, userinfo);
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
const express = require('express');
const app = express();
const bodyParser =require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session=require('express-session');
app.use(session({secret:"secret",resave :true,saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());

const mysql = require('mysql');
const connection=mysql.createConnection({
    host     : 'cap',
    user     : 'admin',
    password : '1111'

});


app.listen(8080,function(){
  console.log('Hello Teahyeon');
});

app.set('veiw engine','ejs');

//mysql 연동
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  });

//미들웨이 가져오는것


router.get('/login',function(req,res){
  res.render('login.ejs');
});


app.post('/login',passport.authenticate('local',{
    failureRedirect : '/fail'
}),function(req,res){
    res.redirect('/');
});

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    session: true,
    passReqToCallback: false,
  }, function (입력한아이디, 입력한비번, done) {
    //console.log(입력한아이디, 입력한비번);
    db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
      if (에러) return done(에러)
  
      if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
      if (입력한비번 == 결과.pw) {
        return done(null, 결과)
      } else {
        return done(null, false, { message: '비번틀렸어요' })
      }
    })
  }));

  passport.serializeUser(function(user,done){
    done(null,user.id)
  });
  passport.deserializeUser(function(id,done){
    done(null,{})
  });
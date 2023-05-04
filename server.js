var express=require('express');
var app =express();

var bodyParser = require('body-parser'); ////body-parser
app.use(bodyParser.json());

const cookieParser=require('cookie-parser');    //////cookie-parser
app.use(cookieParser());


const cors = require('cors')

app.use(cors());

app.use((req, res, next) => {res.header('Access-Control-Allow-Origin', '*');next();});


// global.__basedir = __dirname;

require('dotenv').config() //////dot  env


var main=require('./routes/user'); //////////routes

app.use('/user',main)


var mains=require('./routes/login')
app.use('/login',mains)


app.get('/home',(req,res)=>{
    res.send('welcomes');
})



app.listen(process.env.port,() => {
    console.log(`Example app listening on port`,process.env.port);
    setTimeout(() => console.log('timer',0));
  }); 
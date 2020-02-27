var express = require('express');
var app = express();

app.set('view engine','jade');
var port = process.env.PORT || 2000;

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

// khi mo website mac dinh
app.get("/",(req,res)=>{
    res.render('index');
})

var server = app.listen(port,function() {});
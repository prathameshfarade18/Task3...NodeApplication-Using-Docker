var express = require('express');
 
var app = express();//Respond with "hello Bhai log" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('  Jenkins ');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;

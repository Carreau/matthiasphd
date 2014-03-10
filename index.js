var express = require('express');

var app = express();

var auth = express.basicAuth(function(user,pass) {
      return ('user' === user && 'pass' === pass)
            || (user === 'matthias' && pass == 'matthias')
          ;
});

app.use('/', auth)
app.use('/', express.static(__dirname + '/files'));
console.log(__dirname + '/files/');

app.listen();
var port =  process.env.PORT||5000
app.listen(port);
console.log('listening on ', port)

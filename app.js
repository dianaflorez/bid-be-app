var express = require('express');
var app = express();
var config = new require("./config")();

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.send('Hello World, from Heroku!');
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port', app.get('port'));
  console.log('Database connection: ', config.DATABASE_URL);
  console.log('Foo value: ', config.FOO);
});


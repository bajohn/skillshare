//var exports = module.exports = {};

var express = require('express');
var app = express();

var staticDir = '/var/www/static';
app.use(express.static(staticDir));


app.listen(4000, function () {
  console.log('Barebones app listening on port 4000!')
})

app.get('/', function (req, res) {
 console.log(res);
  res.send('Here is a blank homepage.')
})
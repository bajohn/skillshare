//var exports = module.exports = {};



var express = require('express');
var app = express();

var staticDir = './static';

//create static directory to read files ./static
app.use(express.static(staticDir));


var serverHandle = app.listen(4000, function () {
	//start up app on 4000, using npm start
	//kill using endpoint
	console.log('Barebones app listening on port 4000!');
})

app.get('/', function (req, res) {
	//listen in homepage
	console.log('homepage');
	res.send('Here is a blank homepage.')
})

app.get('/ep', function (req, res) {

	console.log('react endpoint');
	ReactDOM.render(
	  '<h1>Hello, world!</h1>',
	  document.getElementById('root')
	);
	
	res.send(ReactDOM);
	
})



app.get('/kill', function (req, res) {
	
	// kill server; never do this in production
	console.log('killing server');
	res.send('Killing server...')
	serverHandle.close();
})


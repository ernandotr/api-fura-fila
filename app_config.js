var  express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 3000));

var allowCors = function(req, res, next){

	res.header('Acces-Control-Allow-Origin', '*');
	res.header('Acces-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Acces-Control-Allow-Headers', 'Content-Type');
	res.header('Acces-Control-Allow-Credentials', 'true');

	next();
}

app.listen(app.get('port'), function(){
	console.log('Aplicao rodando na porta: ',app.get('port'));
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));
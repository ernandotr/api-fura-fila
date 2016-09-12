var db_string = 'mongodb://localhost/first-api-restfull';
//var db_string =  'mongodb://ernando_heroku:heroku!521@ds029436.mlab.com:29436/heroku_x23ntjx4';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar ao banco'));

db.once('open', function(){
	var userSchema = mongoose.Schema({
		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});
	exports.User = mongoose.model('User', userSchema);
});
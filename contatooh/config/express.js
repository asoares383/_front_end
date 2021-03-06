// config/express.js
var express = require('express');
var home = require('../app/routes/home');
//var load = require('express-load');

module.exports = function(){
	var app = express();

	// Configuração de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	/* load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app); */

	home(app);

	return app;
}
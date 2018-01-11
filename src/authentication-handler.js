"use strict";

const winston = require('winston');
const authentication = require('./authentication.js')

module.exports = {

	login: function(req, res, next) {
		var userName = req.body.username;
		var password = req.body.password;

		authentication.login(userName, password)
		.then(jwt => {
			res.send('jwt:' + jwt);
		}).catch(e=> {
			res.status(500, 'error');
		})
  }
}
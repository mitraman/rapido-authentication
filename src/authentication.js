"use strict";

const winston = require('winston');
const jwt = require('jsonwebtoken');
const Promise = require('bluebird');

let authentication = function() {
	this.secret = 'secret';
}

authentication.prototype.login = function(userid, password) {
	return new Promise( (resolve,reject) => {

		// Check the credentials in the data source

		// If the credentials are valid, generate a JWT token
		resolve(jwt.sign({id: 0, email: 'test@test.com'}, this.secret))
	});
} 	

module.exports = new authentication();
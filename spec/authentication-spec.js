"use strict";

const authentication = require('../src/authentication.js');
const winston = require('winston')
const Promise = require('bluebird');

describe('authentication', function() {
	
	beforeAll(function() {
		// Setup a mock data store

		// Should the auth. service integrate directly with a database or should it use an event store?
	});

	fit('should return a JWT when valid credentials are presented', function(done) {
		authentication.login('username', 'password')
		.then(jwt => {
			expect(jwt).toBeDefined();
		})
		.catch(e => {
			fail(e);
		})
		.finally(done);
	});

	it('the JWT should be verificable using a private key', function() {

	});

	it('should reject an attempt to login with an invalid password', function() {

	});

	it('should reject an attempt to login with an unknown userid', function() {

	});
});
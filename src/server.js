"use strict";

const winston = require('winston');
const express = require('express');
const bodyParser = require('body-parser');
const authenticationHandler = require('./authentication-handler.js');

const serverPort = 8082;

// Setup the express server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Start the server
const server = app.listen(serverPort, () => {
	winston.log('debug', '%s listening at %s', app.name, app.url);
});

// Establish Routes
app.post('/login', authenticationHandler.login);
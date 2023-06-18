const express = require('express');
const { addUser, authenticateUser } = require('../controllers/user');

const Router = express.Router();

Router.post('/', addUser);

Router.post('/login', authenticateUser);

module.exports = Router;

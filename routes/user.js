const express = require('express');
const { addUser } = require('../controllers/user');

const Router = express.Router();

Router.post('/', addUser);

module.exports = Router;

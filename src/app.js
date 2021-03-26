const express = require('express');

const index = require('./routes/index');
const rulesRoute = require('./routes/rules');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', index);
app.use('/rules', rulesRoute);

module.exports = app;
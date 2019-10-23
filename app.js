const express = require('express');
const app = express();
const clientRouters = require('./api/router/clientListRouter');
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/clientList', clientRouters);

app.use((req, res, next) => {
  res.status(200).json({
    'message' : 'it works!'
  });
});

//to export the variabel
module.exports = app;

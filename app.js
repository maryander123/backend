const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routes/users');
const app = express();

app.use(express.json()); //recibe json
app.use(morgan('tiny')); //llamada buena o mala
app.use(express.urlencoded({ extended: true })); //si envio un json solo recibe un json, verifica que contenido se esta enviando desde frontend

//rutas backend
app.use('/api/users', usersRouter); //app es donde guarda toda la logica servidor

module.exports = app;

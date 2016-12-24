/**
* Arquivo: server.js
* Descrição: Arquivo responsável por levantar o serviço do Node.Js para poder
* executar criação de uma API Rest Geolocation
* Author: Michel Ferreira Souza
* Data de Criação: 23/12/2016

require dependencias */
const  express = require('express');
const  mongoose = require('mongoose');
const  bodyParser = require('body-parser');

/* require model */
const Parking = require('./models/parking');
mongoose.connect('mongodb://localhost/geolocation');

parkingRouter = require('./routes/parking')(Parking);

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/parking', parkingRouter);

app.get('/', function(req, res){
    res.send('API Geolocation!!!')
});

app.listen(port, function(){
console.log('Execuntando na port: ' + port);
});

module.exports = app;

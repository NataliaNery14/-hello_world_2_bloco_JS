"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello World !!');
});
app.get('/bsm', function (request, response) {
    response.send(' == Mentalidade == <bs> Persistencia <br> Responsabilidade Pessoal <br> Orientação ao Futuro <br> Mentalidade de Crescimento <br> == Habilidade == <br> Trabalho em equipe <br> Atenção aos Detalhes <br> Proatividade <br> Comunicação !!');
});
app.get('/mysql', function (request, response) {
    response.send('== Objetivo de aprentizagem da semana == <br> == BANCO DE DADOS MYSQL == !!');
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port, "!"));
});

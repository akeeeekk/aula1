const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

//Rotas 
const produtosRoute = require('./routes/produtos');
app.use('/api/produtos', produtosRoute);

app.listen (port, () => {
    console.log (`Servidor rodando em http://localhost:${port}`);
});

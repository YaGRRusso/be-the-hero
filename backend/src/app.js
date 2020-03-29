const cors = require('cors');
const express = require('express');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação).
 * Route Paramns: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, criar ou alterar recursos.
*/


app.post('/ongs', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'OmniStack',
        aluno: 'Yago Russo'
    });
});

module.exports = app;
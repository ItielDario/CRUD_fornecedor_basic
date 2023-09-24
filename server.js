const express = require('express');
const FornecedorRoute = require('./routes/fornecedorRoute');
const app = express();

// CONFIGURAÇÕES
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

// ROTAS
const fornecedorRouter = new FornecedorRoute();
app.use('/', fornecedorRouter.router);

app.listen(3000, () => {
    console.log('Servidor iniciado');
});
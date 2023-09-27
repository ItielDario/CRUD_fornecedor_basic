const express = require('express');
const fornecedorController = require('../controller/fornecedorController');
const Autenticacao = require('../middlewares/autenticacao');

class FornecedorRoute{
    #router

    constructor(){
        this.#router = express.Router();
        const ctrl = new fornecedorController();
        const autenticacao = new Autenticacao();

        this.#router.get("/", autenticacao.verificarUsuarioLogado, ctrl.listarView);
        this.#router.post("/", autenticacao.verificarUsuarioLogado, ctrl.excluir);
        this.#router.get("/cadastrar", autenticacao.verificarUsuarioLogado, ctrl.cadastrarView);
        this.#router.post('/cadastrar', autenticacao.verificarUsuarioLogado, ctrl.cadastrar);
        this.#router.get('/alterar/:cnpj', autenticacao.verificarUsuarioLogado, ctrl.alterarView);
        this.#router.post('/alterar', autenticacao.verificarUsuarioLogado, ctrl.alterar);
    }

    get router(){
        return this.#router;
    }
}

module.exports = FornecedorRoute;
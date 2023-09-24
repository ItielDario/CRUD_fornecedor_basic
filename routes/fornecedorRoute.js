const express = require('express');
const fornecedorController = require('../controller/fornecedorController');

class FornecedorRoute{
    #router

    constructor(){
        this.#router = express.Router();
        const ctrl = new fornecedorController()

        this.#router.get("/", ctrl.listarView);
        this.#router.post("/", ctrl.excluir);
        this.#router.get("/cadastrar", ctrl.cadastrarView);
        this.#router.post('/cadastrar', ctrl.cadastrar);
        this.#router.get('/alterar/:cnpj', ctrl.alterarView);
        this.#router.post('/alterar', ctrl.alterar);
    }

    get router(){
        return this.#router;
    }
}

module.exports = FornecedorRoute;
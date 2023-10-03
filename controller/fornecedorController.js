const FornecedorModel = require('../model/fornecedorModel');


class FornecedorController{

    async listarView(req, res){
        const fornecedor = new FornecedorModel();
        const listaFornecedores = await fornecedor.listarFornecedores();
        const usuario = req.cookies.usuarioLogado;
        res.render('listar', {lista: listaFornecedores, usuario: usuario});
    }

    cadastrarView(req, res){
        res.render('cadastrar');
    }

    async cadastrar(req, res) {
        if(req.body.cnpj != '' && req.body.fone != '' && req.body.nome != ''){
            const fornecedor = new FornecedorModel(req.body.cnpj, req.body.fone, req.body.nome);

            const resultado = await fornecedor.gravarFornecedor(true);

            if(resultado){
                res.send({ok: true, msg: "Fornecedor cadastrado com sucesso!"});
            }
            else{
                res.send({ok: false, msg: "Erro ao cadastrar o fornecedor!"});
            }
        }
        else{
            res.send({ok: false, msg: "Dados inválidos!"});
        }
    }

    async excluir(req, res){
        const fornecedor = new FornecedorModel();
        const resposta = await fornecedor.excluirFornecedor(req.body.cnpj);

        if(resposta){
            console.log(resposta)
            res.send({ok: true, msg: 'Fornecedor deletado com sucesso!'});
        }
        else{
            res.send({ok: false, msg: 'Erro ao deletar fornecedor!'});
        }
    }

    async alterarView(req, res){

        // MASCARA CNPJ
        function mascararCNPJ(cnpj) {
            // Remove qualquer caractere que não seja dígito
            cnpj = cnpj.replace(/\D/g, '');
            
            // Aplica a máscara de CNPJ (XX.XXX.XXX/XXXX-XX)
            return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
        }        
        const cnpjOriginal = req.params.cnpj;
        const cnpjFormatado = mascararCNPJ(cnpjOriginal);

        const fornecedor = new FornecedorModel();
        const resposta = await fornecedor.buscarFornecedor(cnpjFormatado)
        
        res.render('alterar', {cnpj: resposta[0].for_cnpj, fone: resposta[0].for_fone, nome: resposta[0].for_razao_social});
    }
    
    async alterar(req, res){
        if(req.body.cnpj != '' && req.body.fone != '' && req.body.nome != ''){
            const fornecedor = new FornecedorModel(req.body.cnpj, req.body.fone, req.body.nome);

            const resultado = await fornecedor.gravarFornecedor(false);

            if(resultado){
                res.send({ok: true, msg: "Fornecedor alterado com sucesso!"});
            }
            else{
                res.send({ok: false, msg: "Erro ao alterar o fornecedor!"});
            }
        }
        else{
            res.send({ok: false, msg: "Dados inválidos!"});
        }
    }
}

module.exports = FornecedorController;
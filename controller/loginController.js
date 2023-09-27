const UsuarioModel = require('../model/usuarioModel')
const cookieParser = require('cookie-parser');

class LoginController{

  loginView(req, res){
    res.render('login');
  }

  async login(req, res){
    const usuario = new UsuarioModel(req.body.email, req.body.senha)

    const resposta = await usuario.buscarUsuario();

    if(resposta){
      res.cookie = ('usuarioLogado', resposta[0].usu_id);
      res.send({ok: true, msg: 'Usuário logado'});
    }
    else{
      res.send({ok: false, msg: 'Usuário inválido'});
    }
  }
}

module.exports = LoginController;
const UsuarioModel = require('../model/usuarioModel');
const cookieParser = require('cookie-parser');

class Autenticacao {
  
  async verificarUsuarioLogado(req, res, next){
    
    if(req.headers.cookie != undefined && req.headers.cookie.includes('usuarioLogado')){
      const id = req.cookies.usuarioLogado;
      const usuario = new UsuarioModel();
      const resposta = await usuario.obterUsuario(id);
      req.cookies.usuarioLogado = resposta;
      next();
    }
    else{
      res.redirect('/login');
    }
  } 
}

module.exports = Autenticacao;
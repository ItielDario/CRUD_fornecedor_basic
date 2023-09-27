const UsuarioModel = require('../model/usuarioModel');
const cookieParser = require('cookie-parser');

class Autenticacao {
  
  async verificarUsuarioLogado(req, res, next){
    console.log('aaaaaaaaa' + req.cookies.usuarioLogado);
    console.log('BBBBB -> ' + req.headers.cookie);
    
    if(req.headers.cookie != undefined && req.headers.cookie.includes('usuarioLogado')){
      const id = req.cookies.usuarioLogado;
      const usuario = new UsuarioModel();
      usuario = await usuario.obterUsuario(id);
      req.cookie.usuarioLogado = usuario;
      next();
    }
    else{
      res.redirect('/login');
    }
  } 
}

module.exports = Autenticacao;
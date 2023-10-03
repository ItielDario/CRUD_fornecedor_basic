const Database = require('../utils/database'); 
const conexao = new Database;

class UsuarioModel{
  #email
  #senha

  constructor(email, senha){
    this.#email = email;
    this.#senha = senha;
  }
  
  get email(){
    return this.#email;
  }

  set email(email){
    this.#email = email;
  }

  get senha(){
    return this.#senha;
  }

  set senha(senha){
    this.#senha = senha;
  }

  async buscarUsuario(){
    const sql = 'SELECT * FROM tb_usuario WHERE usu_email = ? AND usu_senha = ?';
    const valores = [
      this.#email,
      this.#senha,
    ];

    const query = await conexao.executaltarComandoR(sql, valores);
    if(query.length > 0){
      return query;  
    }

    return false;
  }

  async obterUsuario(id){
    const sql = 'SELECT * FROM tb_usuario WHERE usu_id = ?';
    const valor = id;

    const query = await conexao.executaltarComandoR(sql, valor);
    return query[0];
  }
}

module.exports = UsuarioModel;
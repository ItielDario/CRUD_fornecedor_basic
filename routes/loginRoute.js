const express = require('express');
const LoginController = require('../controller/loginController')

class LoginRoute{
  
  #router;
  
  constructor(){
    this.#router = express.Router();
    const ctrl = new LoginController();

    this.#router.get('/', ctrl.loginView);
    this.#router.post('/', ctrl.login);
  }

  get router(){
    return this.#router;
  }
}

module.exports = LoginRoute;

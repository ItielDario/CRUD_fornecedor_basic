document.querySelector('#btn-entrar').addEventListener('click', () => {

  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');

  if(validarCampos(email.value, senha.value)){
    cosole.log('TAI MEU PACERO');
  }
  else{
    console.log('DEU RUIM');
  }
})

function validarCampos(email, senha){

  if(email != '' && senha != ''){
    return true;
  }
  else{
    return false;
  }
}

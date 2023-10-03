const express = require('express');
const mysql = require('mysql2');
const cookieParser = require('cookie-parser');
const FornecedorRoute = require('./routes/fornecedorRoute');
const LoginRoute = require('./routes/loginRoute');
const app = express();

// CONFIGURAÇÕES
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

// GESTÃO DO BANCO

const conexao = mysql.createConnection({
  host: '132.226.245.178',
  database: 'PFS1_10442221876',
  user: '10442221876',
  password: '10442221876',
});

const sql = 'SELECT * FROM tb_usuario'; 

conexao.query(sql, (err, res) => {
  if(err){
    console.log(err);
  }
  else{
    console.log(res);
  }
});


// ROTAS
const fornecedorRouter = new FornecedorRoute();
app.use('/', fornecedorRouter.router);

const loginRouter = new LoginRoute();
app.use('/login', loginRouter.router);

app.listen(3000, () => {
    console.log('Servidor iniciado');
});
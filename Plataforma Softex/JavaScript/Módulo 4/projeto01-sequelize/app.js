const { Sequelize } = require('sequelize');
const config = require('./config'); // Importe as configurações do arquivo config.js

const sequelize = new Sequelize(config.development);

// Testar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Se você quiser realizar consultas ou outras operações no banco de dados, pode fazê-lo aqui.

// Fechar a conexão quando terminar de usar
// sequelize.close(); // Descomente esta linha quando desejar fechar a conexão

const { Sequelize } = require('sequelize');

// Conexão com o banco de dados MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME,  // Nome do banco de dados
  process.env.DB_USER,  // Usuário do banco de dados
  process.env.DB_PASSWORD, // Senha do banco de dados
  {
    host: process.env.DB_HOST,  // Host do banco de dados
    dialect: 'mysql', // Tipo de banco de dados (MySQL)
  }
);

module.exports = sequelize;


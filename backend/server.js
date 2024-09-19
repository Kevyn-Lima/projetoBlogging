const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db'); // Arquivo de conexão com o banco de dados

dotenv.config();  // Carregar variáveis de ambiente do arquivo .env

const app = express();

// Middlewares
app.use(cors()); // Permitir comunicação entre frontend e backend
app.use(express.json()); // Permitir que o servidor aceite requisições com JSON

// Teste de conexão com o banco de dados
db.authenticate()
  .then(() => console.log('Conectado ao MySQL com sucesso!'))
  .catch(err => console.error('Erro ao conectar:', err));

// Rotas (iremos criar depois)
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

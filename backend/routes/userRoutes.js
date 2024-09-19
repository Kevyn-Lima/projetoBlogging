const express = require('express')
const { register, login } = require('../controllers/userController')
const router = express.Router();

//Rota para registro
router.post('/register', register);

//Rota para login
router.post('/login', login)
module.exports = router;

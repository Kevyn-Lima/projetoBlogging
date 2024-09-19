const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Registro de novo usuário

exports.register = async (req, res) =>{
    const { username, email, password } = req.body;
    try{
        //criptografar a senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Criar novo usuario
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        res.status(201).json({
            message: 'Usuário criado com sucesso!'
        })
    }catch(err){
        res.status(500).json({
            error:'Erro ao criar usuário'
        })
    }
};

//Login do usuário

exports.login = async (req, res) =>{
    const { email, password } = req.body;

    try{
        //Verificar se o usuário existe
        const user = await User.findOne({where: { email }});
        if(!user) return res.status(404).json({error:'Usuario não encontrado'});

        //Verificar se a senha está correta
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({error: 'Senha incorreta'})
         // Gerar token JWT

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET,{
            expiresIn:'1h',
        });
        res.join({token})
    } catch(err){
        res.status(500).json({error: 'Erro ao autenticar usuário'})
    }
}
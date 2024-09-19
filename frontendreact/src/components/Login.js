import React, {useState} from 'react';
import axios from 'axios';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/users/login', {email, password});
            localStorage.setItem('token', data.token);
            alert('Login bem-sucedido');
        }catch(err){
            alert('Erro ao fazer login');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit'>Login</button>
        </form>
    );
}

export default Login;
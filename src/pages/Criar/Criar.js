import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const Criar = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [login, setlogin] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: name
            email: email
            login: login
            senha: senha
            confirmaSenha: confirmaSenha
        }
        axios.post('user/register', user)
        .then(response => console.log(response))
    }

    return (
        <div className='criar'>
            <div className='criar-container'>
                <h2>Criar uma conta</h2>
                <form className='criar-form' onSubmit={handleSubmit}>
                <label>Nome</label>
                <input type='text' required onChange={event => setName(event.target.value)}/>

                <label>Nickname</label>
                <input type='text' required onChange={event => setlogin(event.target.value)}/>

                <label>Endereço de e-mail</label>
                <input type='email' required onChange={event => setEmail(event.target.value)}/>

                <label>Senha</label>
                <input type='password' required onChange={event => setSenha(event.target.value)}/>

                <label>Confirmar senha</label>
                <input type='password' required onChange={event => setConfirmaSenha(event.target.value)}/>
                
                <div className='criar-btn'>
                    <input type='submit' value='Continuar' />
                </div>
                </form>
        </div>
    </div>
    )
}

export default Criar;

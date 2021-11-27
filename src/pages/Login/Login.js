import React from "react";
import { useState } from "react";
import axios from "axios";
import './Login.css'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const login = {
      email: email,
      password: password,
    }

    axios.post('/auth/login', login)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token)
    })
  }

  return (
    <div className='logincard'>
      <h2 className='logincardtitle'>Meu GAME STORE</h2>
      <div className='logincardcontainer'>
        
        <form className='login-form' onSubmit={handleSubmit}>
          <input type='text' placeholder='Endereço de e-mail' required
          onChange={event => setEmail(event.target.value)}
          />
          <input type='password' placeholder='Senha'
          onChange={event => setPassword(event.target.value)}
          />
          <div className='login-ok'>
            <a href='!#'>
              <span>Esqueceu sua senha?</span>
            </a>
            <input type='submit' value='Fazer login' />
          </div>
        </form>
        <div className='login-create'>
          <span>Ainda não possui uma conta?</span>
          <a className='btn-create' href='/criar'>Criar uma conta GAME STORE</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { useState } from "react";
import axios from "axios";

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
    .then(response())
  }

  return (
    <div className="card-body">
      <div className="card">
        <input
          className="navbar__place"
          type="text"
          placeholder="Digite seu usuario"
          required
        />
        <input
          className="navbar__place"
          type="text"
          placeholder="Digite sua senha"
          required
        />
        <input type="submit" value="Encontrar" />
      </div>
    </div>
  );
};

export default Login;

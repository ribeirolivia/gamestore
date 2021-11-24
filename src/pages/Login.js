import React from "react";

const Login = () => {
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

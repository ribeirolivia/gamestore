import React from "react";
import "./Navbar.css";
import { FaStar, FaUserSecret, FaArrowUp, FaChild } from "react-icons/fa";


function Navbar(props) {
  return (
    <div className="navbar">
      <h1 className="navbar__text">GAME STORE</h1>

      <a className="navbar__text">
        <FaStar className="navbar__text" href="/favorite" />
        <span className="navbar__text">Favoritados</span>
      </a>

      <a className="navbar__text">
        <FaUserSecret className="navbar__text" href='/login' />
        <span className="navbar__text">Entre</span>
      </a>
      
      <a className="navbar__text">
        <FaArrowUp className="navbar__text" href='/criar' />
      </a>

      <a className="navbar__text">
        <FaChild className="navbar__text" href='/perfil' />
      </a>
      
      <form onSubmit={props.onSubmit} className="navbar__input">
        <input
          className="navbar__place"
          type="text"
          placeholder="Procure aqui"
          required
        />
        <input type="submit" value="Procurar" />
      </form>
    </div>
  );
}

export default Navbar;

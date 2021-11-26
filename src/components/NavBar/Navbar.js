import React from "react";
import "./Navbar.css";
import { FaStar, FaUserSecret, FaArrowUp, FaChild } from "react-icons/fa";

function Navbar(props) {
  return (
    <div className="navbar">
      <h1 className="navbar__text">GAME STORE</h1>

      <a className="navbar__text" href="/favorite">
        <FaStar/>
        <span className="navbar__text">Favoritados</span>
      </a>

      <a className="navbar__text" href="/login">
        <FaUserSecret/>
        <span className="navbar__text">Entre</span>
      </a>

      <a className="navbar__text" href="/criar">
        <FaArrowUp/>
      </a>

      <a className="navbar__text" href="/perfil">
        <FaChild/>
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

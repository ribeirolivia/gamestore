import React from "react";
import "./Navbar.css";
import { FaStar, FaUserSecret } from "react-icons/fa";
import Login from "../../pages/Login";

function Navbar(props) {
  return (
    <div className="navbar">
      <h1 className="navbar__text">GAME STORE</h1>

      <a className="navbar__text">
        <FaStar className="navbar__text" href="/favoritos" />
        <span className="navbar__text">Favoritados</span>
      </a>

      <a className="navbar__text">
        <FaUserSecret className="navbar__text" href={<Login/>} />
        <span className="navbar__text">Entre</span>
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

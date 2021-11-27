import React from "react";
import "./CardList.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const CardList = (props) => {
  const navigate = useNavigate();

  const goToGameNavigate = () => {
    navigate("/game", { state: props.id });
  };

  const favorite = () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const id = props.id;

    axios.get(`/game/favorites/${id}`, config);
  };

  return (
    <div className="card-list">
        <div className="cardlist" onClick={goToGameNavigate}>
            <div className="cardimg">
                <img src={props.image} className="cardimg" alt={props.name} />
            </div>
            <h5 className="card-text">{props.name}</h5>
            <p className="card-text">{'R$' + props.valor}</p>        
        <button className="favorite" onClick={favorite}>
        <FaStar />
        </button>
        </div>
    </div>
  );
};

export default CardList;
